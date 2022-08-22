import React from 'react'
import Login from '/workspace/MDOMS_FrontEnd/front/src/assets/image/login.png'
import styled from 'styled-components';
import "@fontsource/noto-sans-kr";

const Button = styled.button`
    width: 96px;
    height: 40px;
    background: #C8D4E6;
    border-radius: 6px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    margin-top: 24px;
    justify-content: center;
    align-items: center;
    float: right;
    margin-left: 272px;
    :hover{
        background-color: #8FB6F0;
        transition: opacity 1s;
    }
`
const ButtonText = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    color: #3A4241;
    padding-bottom: 3px;

`

function LoginButton(props){

    return(
        <Button>
            <ButtonText>Login</ButtonText>
            <img src={Login}></img>
        </Button>
    )
}

export default LoginButton;