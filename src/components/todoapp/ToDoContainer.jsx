import ToDoItem from "./ToDoItem"
import ToDoButtons from "./ToDoButtons"
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore"
import {db, auth} from "../../firebase/firebase"

export default function ToDoContainer(){

    // FETCHING/FILTERING TO DO LIST
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState("all")
    const [user, loading] = useAuthState(auth)

    const fetchTodos = async () => {
        try{

            let q
            if(filter === "all") {q = query(collection(db, 'tasks'), where("uid","==",auth.currentUser.uid), orderBy('timestamp', 'desc'))}
            else if(filter === "completed") {q = query(collection(db, 'tasks'), where("completed", "==", true), where("uid","==",auth.currentUser.uid), orderBy('timestamp', 'desc'))}
            else if(filter === "incomplete") {q = query(collection(db, 'tasks'), where("completed", "==", false), where("uid","==",auth.currentUser.uid), orderBy('timestamp', 'desc'))}
            
            onSnapshot(q, (querySnapshot) => {
                setTodos(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
        catch(err){
            console.error(err)
            alert("Error fetching list data")
        }
    }

    useEffect(() => {
        console.log("USEEFFECT:",filter)
        if (loading) return;
        if (!user) return;
        fetchTodos()
    }, [user, loading, filter])

    // FILTERING

    return(
        <div className="w-full flex flex-wrap gap-4">
            <ToDoButtons filterHandler={setFilter}/>
            {todos.map((todo) => (
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