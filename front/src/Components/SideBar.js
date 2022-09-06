import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import userServiceNumberAtom from '../recoil/auth/atom';
import { accessTokenAtom, affiliatedUnitAtom } from '../recoil/auth';

const Sidebarbox = styled.div`
    background-color: #50627F;
    width: 221px;
    height: 953px;
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
    padding-left: 14px;
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
    padding-left: 14px;
    color: #FFFFFF;
`

const UserName = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    color: #FFFFFF;
    padding-left: 12px;
    
`

const UserAffiliatedUnit = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    padding-left: 14px;
`

const Line = styled.div`
    background: #D9D9D9;
    border: 1px solid #F1F5F9;
    margin-left: 14px;
    margin-right: 14px;
    margin-top: 5px;
`

function SideBar() {
    const ServiceNumber = useRecoilValue(userServiceNumberAtom);
    const AffiliatedUnit = useRecoilValue(affiliatedUnitAtom);
    
    return(
        <>
            <Sidebarbox>
                <User>USER</User>
                <UserDataBox>
                    <UserServiceNumber>{ServiceNumber}</UserServiceNumber>
                    <UserName>일병 김두현</UserName>
                    <UserAffiliatedUnit>{AffiliatedUnit}</UserAffiliatedUnit>
                    <Line></Line>
                </UserDataBox>
            </Sidebarbox>
        </>
    )
}

export default SideBar;