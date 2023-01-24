import styled from "styled-components"
import 'style/index.css'
import React, { useState, useEffect } from 'react'

function Index(){


    return(
        <S.Wrapper>
            <S.title>FrontEnd<span>Developer</span></S.title>
            <S.p>Portfolio</S.p>
        </S.Wrapper>
    )
}
export default Index

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	          animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
    @media only screen and (max-width:767px){
        font-size:${({ theme }) => theme.fontSize.xLarge};
    }
`


const title = styled.h1`
    font-family: 'font-black';
    color: ${({ theme }) => theme.palette.four};
    

    @media only screen and (max-width:767px){
        width: 60vw;
        font-size: ${({ theme }) => theme.fontSize.Large};
        display: flex;
        flex-direction: column;
        transition: all 0.5s;
        & span{
            text-align: right;
        }
    }
`
const p = styled.h1`
    font-family: 'font-bold';
    color: ${({ theme }) => theme.palette.four};
   

    -webkit-animation: blink 0.6s both;
	        animation: blink 0.6s both;
 animation-delay: 1s;
 -webkit-animation-delay: 1s;
@-webkit-keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}

    @media only screen and (max-width:767px){
        margin-top: 15px;
    }
`
const S = {
    Wrapper,
    title,
    p
}