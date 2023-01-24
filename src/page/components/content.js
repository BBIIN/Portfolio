import styled from 'styled-components'
import Character from 'style/image/character_line.png'
import 'style/index.css'

function Content(){
    return(
        <S.Container id='about'>
            <S.Wrapper>
                <S.div>
                    <p>안녕하세요. 저는 신입 프론트엔드를 꿈꾸는 백수빈입니다.</p>
                    <br/>
                    <p>대학교 졸업을 앞두고 가족의 추천으로 웹개발 직군을 알게되었고 웹개발에 흥미를 느끼게 되어 
                        대학교 졸업 후 바로 국비 지원 프로그램을 통해 처음 코딩을 배우게되었습니다. <br/> 웹 개발에 대해서 전혀 몰랐지만 국비 프로그램에서 진행한 프로젝트를 통해 성취감을 느끼고 웹 개발 실무에 대한 이해력를 높였습니다.</p>
                    <br/>
                    <p>저를 이끌어 줄 회사를 만나 더욱 더 발전해나가 제가 만든 웹을 사용자들이 편리하게 사용할 수 있는 성취감을 느끼고 싶습니다. </p>
                </S.div>
                <S.Image src={Character} alt='characterImage'/>
            </S.Wrapper>
        </S.Container>
    )
}
export default Content

const Container = styled.div`
    width: 80vw;
    height: 100vh;
    min-height: 700px;
    margin: 0 auto;
    @media only screen and (min-width:768px) and (max-width:1023px) {
    
}
    @media only screen and (max-width: 767px) {
        margin-bottom: 20vh;
        height: 750px;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    transition: all 0.5s;
    @media only screen and (max-width: 767px) {
        flex-wrap: wrap;
        transition: all 0.5s;
}
`
const div = styled.div`
    width: 40vw;
    height: 45vh;
    min-height: 300px;
    padding: 20px;
    word-break: keep-all;
    line-height: 24px;
    background-color: ${({ theme }) => theme.palette.second};
    border-radius: 15px;
    font-family: 'font-regular';
    text-align: left;
    position: relative;
    & p:first-child{
        font-size: ${({ theme }) => theme.fontSize.large};
    }
        &::before{
        content: "";
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        bottom: 22px;
        right: -17px;
        transform: rotate(45deg);
        z-index: -1;
        background-color: ${({ theme }) => theme.palette.second};
}
@media only screen and (min-width:768px) and (max-width:1023px) {
    min-width: 400px;
    line-height: 22px;
    min-height: 340px;
    &::before{
        bottom: 55px;
}
} 

@media only screen and (max-width: 767px) {
    width: 300px;
    height: auto;
    & p:first-child{
        font-size: ${({ theme }) => theme.fontSize.medium};
    }
    &::before{
        width: 40px;
        height: 40px;
        bottom: -15px;
        right: 40px;
        transform: rotate(45deg);
    }
}
`


const Image = styled.img`
    width: 30vw;
    min-width: 380px;
    position: relative;
    transform: translateY(15vh);
    @media only screen and (min-width:768px) and (max-width:1023px) { 
        min-width: 380px;
    }
    @media only screen and (max-width: 767px) {
        position: static;
        transform: translateY(0);
        width: 380px;
        min-width: 300px;
        margin-left: 100px;
}
`

const S = {
    Image,
    div,
    Wrapper,
    Container
}