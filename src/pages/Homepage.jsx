import Navbar from "../components/navbar"
import HeroContent from "../components/herocontent"
import HomeContainer from "../components/homecontainer"
import PageWrapper from "../components/pagewrapper"
import FlexContainer from "../components/flexcontainer"
import { auth } from "../firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Homepage() {

    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(loading) return;
        if(user) navigate("/todolist") 
    },[user, loading])

    return(
        <PageWrapper>
            <Navbar />
            <FlexContainer>
                <HomeContainer>
                    <HeroContent/>
                </HomeContainer>
            </FlexContainer>
        </PageWrapper>
    )
}

export default Homepage