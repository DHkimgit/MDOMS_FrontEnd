import React, {useEffect, useState} from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import userServiceNumberAtom, {loginStateAtom, accessTokenAtom, affiliatedUnitAtom} from '../recoil/auth';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/image/logo.png'
import "@fontsource/noto-sans-kr";
import styled from 'styled-components';
import InputBar from '../Components/InputBar';
import userNameAtom from '../recoil/auth/username';
//https://www.npmjs.com/package/@fontsource/noto-sans-kr

const Background = styled.div`
    background-color: #F5F5F5;
    height: 100vh;
    display: flex;
`
const LoginBox = styled.div`
    background-color: #50627F;
    width: 404px;
    height: 424px;
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
    padding-top: 40px;
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
    padding-top: 30px;
    margin-left: 308px;
`
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

var stringify = require('qs-stringify');

function LoginForm2() {
    const [userServiceNumber, setUserServiceNumber] = useRecoilState(userServiceNumberAtom);
    const [userAffiliatedUnit, setUserAffiliatedUnit] = useRecoilState(affiliatedUnitAtom);
    const [accessToken, setAcessToken] = useRecoilState(accessTokenAtom);
    const [loginstate, setLoginState] = useRecoilState(loginStateAtom);
    const [username, setUserName] = useRecoilState(userNameAtom);
    const [insertValue, setInsertValue] = useState({
        ServiceNumber: '',
        Password: '',
    });
    const [validData, setValidData] = useState(true);
    const navigate = useNavigate();
    const {ServiceNumber, Password} = insertValue;
    
    useEffect(()=> {
        const token = localStorage.getItem('user');
        const token_request = JSON.parse(token);
        if (token) {
            setLoginState(true);
            axios.get("https://mdoms-backend.run.goorm.io/auth/users/me/", {
                headers: {
                    Authorization: `Bearer ${token_request}`
                }
            })
            .then(result => {
                setUserServiceNumber(result.data.ServiceNumber);
                setUserAffiliatedUnit(result.data.AffiliatedUnit);
                setUserName(result.data.UserName);
            })
        }
    })

    const onChangeinsertValue = (event) => {
        const {value, name} = event.target;
        setInsertValue({
          ...insertValue,
          [name]: value
        });
        console.log(event.target.value)
      };
    
    const params = stringify({
        'username': ServiceNumber,
        'password': Password
    });
    
    async function Login(){
        axios.post("https://mdoms-backend.run.goorm.io/auth/login", params)
        .then(result => {
            console.log(result.status);
            if (result.status === 200){
                console.log(result.data);
                localStorage.setItem('user', JSON.stringify(result.data.access_token));
                setAcessToken(result.data.access_token);
                setLoginState(true);
                console.log(accessToken)
                navigate('/main');
            }
            else{
                setValidData(false);
            }
        })
    }

    async function Logout(){
        localStorage.removeItem('user');
        setLoginState(false);
        setAcessToken('');
    }

    async function getSetviceNumber_Debug(){
        axios.get("https://mdoms-backend.run.goorm.io/auth/users/me/", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(result => {
                setUserServiceNumber(result.data.ServiceNumber);
                console.log(userServiceNumber);
                console.log(result.data.UserName)
                console.log(result.data.Email)
                console.log(result.data.AffiliatedUnit)
            })
    }

    function Click_Debug(){
        console.log(loginstate)
        console.log(userServiceNumber)
        console.log(accessToken)
    }
//<div class='w-96 bg-white container mx-auto my-auto shadow-xl'>
    return (
        <Background>
            <LoginBox>
                <LoginTopBox>
                        <LogoBox>
                            <img src={Logo} width='60' height='48' alt="logo" />
                        </LogoBox>
                        <MainText>IWTGH</MainText>
                </LoginTopBox>
                <InputBox>
                    <InputText>군번</InputText>
                    <InputBar placeholder={"ServiceNumber"} inputtype={"text"} name={'ServiceNumber'} value={ServiceNumber} onChange={onChangeinsertValue}/>
                </InputBox>
                <InputBox>
                    <InputText>비밀번호</InputText>
                    <InputBar placeholder={"Password"} inputtype={"password"} name={'Password'} value={Password} onChange={onChangeinsertValue}/>
                </InputBox>
                <Button onClick={Login}>
                    <ButtonText>Login</ButtonText>
                    <img src={Login}></img>
                </Button>
                <RegistBox>Register</RegistBox>
            </LoginBox>
        </Background>
    );
}

export default LoginForm2;

{/* <div class='flex justify-center items-center pt-2'>
<img src={Logo} width='60' height='82.5' alt="logo" />
</div>
<div class='block pb-8 pt-1 text-center text-xl font-bold tracking-wide'>
집가고싶다
</div>
<div className={styles.userinputwrp}>
<br/>
<input type="text" className={styles.inputText} required/>
<span className={styles.floatinglabel}>ServiceNumber</span>
</div>

{loginstate ? 
<div class='ml-4 mr-4'>
<div class='mb-2 text-center text-lg font-extrabold'>
    로그인 완료
</div>
<div class='mb-2 text-left text-lg font-extrabold'>
    군번 = {userServiceNumber}
</div>
<div class='mb-2 text-left text-lg font-extrabold'>
    소속 = {userAffiliatedUnit}
</div>
<button onClick={Logout} class="py-2 px-4 pt-3 pb-3 w-full font-semibold rounded-lg shadow-md text-white bg-cyan-600 hover:bg-cyan-700 mb-3">
    로그아웃
</button>
</div>
:
<div class='ml-4 mr-4'>
<div class='mb-2 text-left text-lg font-extrabold'>
    로그인
</div>
<input type="text" name='ServiceNumber'value={ServiceNumber} onChange = {onChangeinsertValue} class='text-base w-full border-b border-b-slate-500 pl-1 pt-2 pb-2 mb-4 ' placeholder='군번'></input>
<input type="password" name='Password'value={Password} onChange = {onChangeinsertValue} class='text-base w-full border-b border-b-slate-500 pl-1 pt-2 pb-2 mb-5' placeholder='비밀번호'></input>
{validData ? null : <div class='mb-2 text-left text-lg text-red-500 text-center font-extrabold'>잘못된 비밀번호</div>}
<button onClick={Login} class="py-2 px-4 pt-3 pb-3 w-full font-semibold rounded-lg shadow-md text-white bg-cyan-600 hover:bg-cyan-700 mb-3">
    로그인
</button>
<div class='pb-4 text-right underline'>
    <Link to='/main'>회원가입</Link>
</div>
</div>
} */}