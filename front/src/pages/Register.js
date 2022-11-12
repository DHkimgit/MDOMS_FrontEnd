import React, {useEffect, useState} from 'react'
import { useRecoilState } from 'recoil';
import userServiceNumberAtom, {loginStateAtom, accessTokenAtom, affiliatedUnitAtom} from '../recoil/auth';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/image/logo.png'
import "@fontsource/noto-sans-kr";
import styled from 'styled-components';
import InputBar from '../Components/InputBar';
import LoginButton from '../Components/Auth/LoginButton';
import Toggle from '../Components/Toggle';
import RegisterButton from '../Components/Auth/RegisterButton';
//https://www.npmjs.com/package/@fontsource/noto-sans-kr

const Background = styled.div`
    background-color: #F5F5F5;
    height: 100vh;
    display: flex;  
`
const LoginBox = styled.div`
    background-color: #50627F;
    width: 404px;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    `
const LoginTopBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`
const LogoBox = styled.div`
    width: 65px;
`
const MainText = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    align-items: center;
    color: #F1F5F9;
`
const InputText = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    padding-bottom: 7px;
    padding-left: 36px;
    color: #F1F5F9;
`
const InputText2 = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    padding-top: 9px;
    padding-left: 36px;
    color: #F1F5F9;
    padding-bottom: 4px;
`

const InputBox = styled.div`
    padding-top: 15px;
`
const RegistBox = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    float: right;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 328px;
`
const ToggleBox = styled.div`
    padding-left: 36px;
    display: flex;
`
const ToggleBox2 = styled.div`
    display: flex;
`

var stringify = require('qs-stringify');

function Register() {
    const [insertValue, setInsertValue] = useState({
        Name: '',
        ServiceNumber: '',
        Password: '',
        ConfirmPassword: '',
        Email: '',
        AffiliatedUnit: '',
    });
    const navigate = useNavigate();
    const {Name, ServiceNumber, Password, ConfirmPassword, Email, AffiliatedUnit} = insertValue;
    const [isChecked, setChecked] = useState(false);
    const onChangeChecked = ({ target }) => {
        target.checked ? setChecked(true) : setChecked(false);
      }; 
    const onChangeinsertValue = (event) => {
        const {value, name} = event.target;
        setInsertValue({
          ...insertValue,
          [name]: value
        });
        console.log(event.target.value)
      };
    
    const paramss = stringify({
        'UserName': Name,
        'ServiceNumber': ServiceNumber,
        'Email': Email,
        'Password': Password,
        'AffiliatedUnit': AffiliatedUnit,
        'IsOfficer': isChecked
    });
    
    async function Register(){
        await axios.post("https://mdoms-backend.run.goorm.io/user/", paramss, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
          })
        .then(result => {
            if (result.status === 200){
                navigate('/auth');
            }
        })
    }
    
    function params_debug(params){
        console.log(params);
    }
    
    return (
        <Background>
            <LoginBox>
                <LoginTopBox>
                        <MainText>Register</MainText>
                </LoginTopBox>
                <InputBox>
                    <InputText>이름</InputText>
                    <InputBar placeholder={"Name"} inputtype={"text"} name={'Name'} value={Name} onChange={onChangeinsertValue}/>
                </InputBox>
                <InputBox>
                    <InputText>군번</InputText>
                    <InputBar placeholder={"ServiceNumber"} inputtype={"text"} name={'ServiceNumber'} value={ServiceNumber} onChange={onChangeinsertValue}/>
                </InputBox>
                <InputBox>
                    <InputText>비밀번호</InputText>
                    <InputBar placeholder={"Password"} inputtype={"password"} name={'Password'} value={Password} onChange={onChangeinsertValue}/>
                </InputBox>
                <InputBox>
                    <InputText>비밀번호 확인</InputText>
                    <InputBar placeholder={"Confirm Password"} inputtype={"password"} name={'ConfirmPassword'} value={ConfirmPassword} onChange={onChangeinsertValue}/>
                </InputBox>
                <InputBox>
                    <InputText>이메일</InputText>
                    <InputBar placeholder={"Email"} inputtype={"email"} name={'Email'} value={Email} onChange={onChangeinsertValue}/>
                </InputBox>
                <InputBox>
                    <InputText>소속</InputText>
                    <InputBar placeholder={"AffiliatedUnit"} inputtype={"text"} name={'AffiliatedUnit'} value={AffiliatedUnit} onChange={onChangeinsertValue}/>
                </InputBox>
                <InputText2>간부</InputText2>
                <ToggleBox><Toggle name={'IsOfficer'} value={isChecked} onChange={onChangeChecked}/></ToggleBox>
                <ToggleBox2><RegisterButton onClick={Register}/></ToggleBox2>
                <button onClick={params_debug(paramss)}>wewd</button>
                <RegistBox>Login</RegistBox>
            </LoginBox>
        </Background>
    );
}

export default Register;