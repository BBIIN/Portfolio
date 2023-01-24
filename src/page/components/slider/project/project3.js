import styled from "styled-components"
import 'style/index.css'
import pic from 'style/image/pic.png'
import html from 'style/image/html.png'
import css from 'style/image/css.png'
import react from 'style/image/react.svg'
import link from 'style/image/link.png'

function Project3(){
    return(
        <div className="project">
            <h2 className="title">Portfolio site<a href=" https://BBIN.github.io"><img src={link}/></a></h2>
            <div className="wrapper">
                <S.img src={pic} className="pic"/>
                <div className="text">
                    <p>저를 소개하기 위해 리액트를 활용해 만든 포트폴리오 홈페이지입니다.</p>
                    <ul className='logo'>
                        <li><img src={html}/><p>HTML</p></li>
                        <li><img src={css}/><p>CSS</p></li>
                        <li><img src={react}/><p>REACT</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Project3


const img = styled.img`
    border: 2px solid ${({ theme }) => theme.palette.four};

`
const S = {
    img,
}