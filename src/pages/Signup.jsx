import PageWrapper from "../components/pagewrapper"
import LSContainer from "../components/login_signup/LoginSignupContainer"
import FlexContainer from "../components/flexcontainer"
import SignupContent from "../components/login_signup/SignupContent"

export default function Signup(){
    return(
        <PageWrapper>
            <FlexContainer>
                <LSContainer>
                    <SignupContent/>
                </LSContainer>
            </FlexContainer>
        </PageWrapper>
    )
}