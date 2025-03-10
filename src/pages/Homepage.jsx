import Navbar from "../components/navbar"
import HeroContent from "../components/herocontent"
import HomeContainer from "../components/homecontainer"
import PageWrapper from "../components/pagewrapper"
import FlexContainer from "../components/flexcontainer"

function Homepage() {
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