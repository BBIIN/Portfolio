import styled from "styled-components"
import Content from "./components/content"
import Index from "./components"
import Slide from "./components/slider/Slide"
import Contact from "./components/contact"
import Menu from "./components/menu"

function MainPage(){
    return(
        <S.container>
            <Menu/>
            <Index/>
            <Content/>
            <Slide/>
            <Contact/>
        </S.container>
    )
}
export default MainPage

const container = styled.div`
`


const S = {
    container
}