import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import userServiceNumberAtom from '../recoil/auth/atom';
import { affiliatedUnitAtom } from '../recoil/auth';
import userNameAtom from '../recoil/auth/username';
import Vector from '../assets/image/Vector2.png'
import Vector2 from '../assets/image/Vector.png'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Sidebarbox = styled.div`
    background-color: #50627F;
    width: 221px;
    height: 866px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
`
const User = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #F1F5F9;
    padding-top: 19px;
    padding-left: 18px;
`

const UserDataBox = styled.div`
    padding-top: 9px;
`

const UserServiceNumber = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-top: 9px;
    padding-left: 18px;
    color: #FFFFFF;
`

const UserNames = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    color: #FFFFFF;
    padding-left: 16px;
    
`

const UserAffiliatedUnit = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #FFFFFF;
    padding-left: 18px;
`

const Line = styled.div`
    background: #D9D9D9;
    border: 1px solid #F1F5F9;
    margin-left: 18px;
    margin-right: 14px;
    margin-top: 5px;
`

const NavBox = styled.div`
    background-color: #50627F;
`

const NavInfo = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #F1F5F9;
    padding-left: 18px;
    padding-top: 12px;
    padding-bottom: 3px;
`
const Front = styled.div`
    position: absolute;
`
const ButtonBox = styled.button`
    width: 193px;
    height: 40px;
    background: #50627F;
    border-radius: 3px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 26px;
    color: #F1F5F9;
    display: flex;
    align-items: center;
    padding-left: 6px;
    :hover{
        background: #C8D4E6;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
        color: #3A4241;
        transition: ease-out 0.3s;
        & ${Front} {
            display: none;
        }
    }
`

const Buttondiv = styled.div`
    padding-left: 14px;
    padding-bottom: 9px;
`

const Buttontext = styled.div`
    padding-left: 8px;
`

const ImgTest = styled.div`
    position: relative;

`

const Helpbox = styled.div`
    padding-top: 200px;
`

function NavButton({props, navigateto}) {
    const navigate = useNavigate();

    return(
        <ButtonBox>
            <ImgTest>
                <Front><img src={Vector}></img></Front>
                <img src={Vector2}></img>
            </ImgTest>
            <Buttontext>{props}</Buttontext>
        </ButtonBox>
    )
};

function SideBar({isOpen}) {
    const ServiceNumber = useRecoilValue(userServiceNumberAtom);
    const AffiliatedUnit = useRecoilValue(affiliatedUnitAtom);
    const UserName = useRecoilValue(userNameAtom);
    return(
        <>
            <Sidebarbox>
                <User>USER</User>
                <UserDataBox>
                    <UserServiceNumber>{ServiceNumber}</UserServiceNumber>
                    <UserNames>{UserName}</UserNames>
                    <UserAffiliatedUnit>{AffiliatedUnit}</UserAffiliatedUnit>
                    <Line></Line>
                </UserDataBox>
                <NavBox>
                    <NavInfo>MENU</NavInfo>   
                    <Buttondiv><NavButton props={'HOME'}></NavButton></Buttondiv>
                    <Buttondiv><NavButton props={'근무자 목록'}></NavButton></Buttondiv>
                    <Buttondiv><NavButton props={'근무표'}></NavButton></Buttondiv>
                    <Buttondiv><NavButton props={'근무공정표'}></NavButton></Buttondiv>
                    <Buttondiv><NavButton props={'건의사항'}></NavButton></Buttondiv>
                </NavBox>
                <Helpbox>
                <Line></Line>
                <NavBox>
                    <NavInfo>Help</NavInfo>   
                    <Buttondiv><NavButton props={'Q&A'}></NavButton></Buttondiv>
                    <Buttondiv><NavButton props={'고객지원'}></NavButton></Buttondiv>
                    <Buttondiv><NavButton props={'체계설정'}></NavButton></Buttondiv>
                </NavBox>
                </Helpbox>
            </Sidebarbox>
        </>
    )
}

export default SideBar;