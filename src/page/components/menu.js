import styled from "styled-components"

function Menu(){
    return(
        <S.Wrapper>
            <S.ul>
                <li><S.a href="#about">#About</S.a></li>
                <li><S.a href="#project">#Project</S.a></li>
                <li><S.a href="#contact">#Contact</S.a></li>
            </S.ul>
        </S.Wrapper>
    )
}
export default Menu

const Wrapper = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 999;
    font-family: 'font-light';
    padding: 10px;
    background-color:${({ theme }) => theme.palette.third};
    @media only screen and (max-width: 767px) {
        display: none;
}
`

const ul = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
`
const a = styled.a`
    overflow: hidden;
        margin-right: 20px;
        text-decoration: none;
        display: block;
        position: relative;
        color: ${({ theme }) => theme.palette.first};
        font-size: ${({ theme }) => theme.fontSize.medium};
    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: ${({ theme }) => theme.palette.four};
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
        opacity: 1;
        transform: translate3d(-100%, 0, 0);
}
:hover{
    color: ${({ theme }) => theme.palette.first}
}
:hover::after,
:focus::after {
    transform: translate3d(0, 0, 0);
}
`
const S = {
    Wrapper,
    ul,
    a
}