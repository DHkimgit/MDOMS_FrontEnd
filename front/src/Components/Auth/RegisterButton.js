import React from 'react'
import Login from '../../assets/image/login.png'
import styled from 'styled-components';
import "@fontsource/noto-sans-kr";

const Button = styled.button`
    width: 96px;
    height: 40px;
    background: #C8D4E6;
    border-radius: 6px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    margin-left: 272px;
    :hover{
        background-color: #476592;
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

function RegisterButton(props){
    return(
        <Button onClick={props.onClick}>
            <ButtonText>Register</ButtonText>
        </Button>
    )
}

export default RegisterButton;