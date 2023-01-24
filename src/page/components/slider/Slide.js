import styled from 'styled-components'
import Project1 from "./project/project1"
import Project2 from "./project/project2"
import Project3 from "./project/project3"
import { useState } from "react"
import { Data } from "./Data"
import 'style/index.css'


function Slide(){

    let [active, setActive] = useState();

    const toggleActive = (e) => {
        const {name} = e.target;
        setActive(name)
    }

    const Components = {
        first : <Project1/>,
        second : <Project2/>,
        third : <Project3/>
    }
    
    return(
        <S.Container id='project'>
            <S.title>PROJECT</S.title>
            <S.List>
                {Data.map(data => {
                    return (
                        <S.btn onClick={toggleActive} name={data.name} key={data.id}>{data.text}</S.btn>
                    )
                })}
            </S.List>
            {active && <S.Hidden> {Components[active]}
            </S.Hidden>}
        </S.Container>
    )
}
export default Slide

const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 600px;
    text-align: center;
    @media only screen and (max-width: 767px) {
        min-height: 750px;
    }
` 
const title = styled.h2`
    font-family: 'font-bold';
    font-size:${({ theme }) => theme.fontSize.large};;
    color: ${({ theme }) => theme.palette.first};
`
const List = styled.div`
    width: 50vw;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`


const btn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-family: 'font-light';
    &:hover{
        cursor: pointer;
        transition: all 0.3s linear;
        transform: scale(1.2);
        color: #005691;
    }
`


const Hidden = styled.div`
    height: 100vh;
    margin: 0 auto;
    font-family: 'font-m';
    @media only screen and (max-width: 767px) {
        height: 550px;
    }
`

const S = {
    Container,
    title,
    List,
    btn,
    Hidden
}