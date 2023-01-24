import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import styled from 'styled-components';

function MailForm(){
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_350y0dv', 'template_ljww8dp', form.current, 'tA1naiqAbUWT-SwB3')
        .then((result) => {
            alert('전송되었습니다')
            console.log(result.text);
        }, (error) => {
            alert('전송 실패했습니다')
            console.log(error.text);
        });
    };

    return(
        <S.Wrapper>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <S.input type="text" name="user_name" placeholder="Name"/>
                </div>
                <div>
                    <S.input type="email" name="user_email"placeholder="Email Adress" />
                </div>
                <S.text name="message" placeholder='Message'/>
                <S.btn type="submit" value="Send" />
            </form>
        </S.Wrapper>
    )
}
export default MailForm


const Wrapper = styled.div`
    text-align: center;
    width: 50vw;
    height: 70vh;
    transform: translateY(20vh);
    font-family: 'font-m';
    @media only screen and (max-width:1023px) {
        margin: 0 auto;
    }
    @media only screen and (max-width: 767px) {
        transform: translateY(0);
        margin-top: 2rem;
        width: 70vw;
        height: 420px;
        
}
`


const input = styled.input`
    border: none;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    background-color: transparent;
    font-family: 'font-m';
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.first};
    :valid {
        background-color: transparent !important;
    }
    :focus{
        background-color: transparent;
        outline: none;
    }
    
`
const text = styled.textarea`
    width: 100%;
    height: 250px;
    resize: none;
    font-family: 'font-m';
    border: 2px solid ${({ theme }) => theme.palette.first};
    padding: 10px;
    background-color: transparent;
    :focus{
        outline: none;
    }
`

const btn = styled.input`
    border: none;
    background-color: ${({ theme }) => theme.palette.first};
    width: 7rem;
    height: 2rem;
    margin-top: 2rem;
    border-radius: 50px;
    color: ${({ theme }) => theme.palette.four}
`
const S = {
    Wrapper,
    input,
    text,
    btn
}