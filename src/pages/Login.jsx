import PageWrapper from "../components/pagewrapper"
import FlexContainer from "../components/flexcontainer"
import LSContainer from "../components/login_signup/LoginSignupContainer"
import LoginContent from "../components/login_signup/LoginContent"

export default function Signup(){
    return(
        <PageWrapper>
            <FlexContainer>
                <LSContainer>
                    <LoginContent/>
                </LSContainer>
            </FlexContainer>
        </PageWrapper>
    )
}