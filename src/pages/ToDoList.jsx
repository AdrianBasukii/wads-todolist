import { auth, db, logout } from "../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { query, collection, getDocs, where } from "firebase/firestore";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ToDoContainer from "../components/todoapp/ToDoContainer";
import ToDoHeader from "../components/todoapp/ToDoHeader";
import PageWrapper from "../components/pagewrapper";
import ToDoWrapper from "../components/todoapp/ToDoWrapper";

export default function ToDoList(){
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth)
    const fetchUserName = async () => {
        try {
          const q = query(collection(db, "users"), where("uid", "==", user?.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setName(data.name);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
    };
    
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
      }, [user, loading])

    return(
      <PageWrapper>
        <ToDoWrapper>
          <ToDoHeader username={name} logout={logout}/>
          <ToDoContainer/>
        </ToDoWrapper>
      </PageWrapper>
        
    )
}