import ToDoItem from "./ToDoItem"
import ToDoButtons from "./ToDoButtons"
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore"
import {db, auth} from "../../firebase/firebase"

export default function ToDoContainer(){

    // FETCHING TO DO LIST
    const [todos, setTodos] = useState([])
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        if (!auth.currentUser) return; 
    
        const q = query(
            collection(db, "tasks"),
            where("uid", "==", auth.currentUser.uid),
            orderBy("timestamp", "desc")
        );
    
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allTodos = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }));
    
            setTodos(allTodos); 
        });
    
        return () => unsubscribe();
    }, [user, loading]);

    // FILTERING

    const [filter, setFilter] = useState("all")
    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        if (filter === "completed") return todo.data.completed === true;
        if (filter === "incomplete") return todo.data.completed === false;
    });

    return(
        <div className="w-full flex flex-wrap gap-4">
            <ToDoButtons filterHandler={setFilter}/>
            {filteredTodos.length === 0 
            ? <h1 className="text-xl font-medium text-neutral-600">Tasks Not Found</h1> 
            : filteredTodos.map((todo) => (
                <ToDoItem
                    id={todo.id}
                    key={todo.id}
                    title={todo.data.title}
                    description={todo.data.description}
                    completed={todo.data.completed}
                />
            ))}
            
        </div>
    )
}