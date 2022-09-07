import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import TopNav from '../Components/TopNav'
import { accessTokenAtom, affiliatedUnitAtom } from '../recoil/auth';
import axios from 'axios';
import userServiceNumberAtom from '../recoil/auth/atom';
import SideBar from '../Components/SideBar';
import styled from 'styled-components';
import userNameAtom from '../recoil/auth/username';
import Timetable_test from './grid/gridtest_timetable';

const Maincontainer = styled.div`
    display: flex;
`
const Timetablecontainer = styled.div`
    width: 900px;
`
function GridTestPage() {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
    const [ServiceNumber, setUserServiceNumber] = useRecoilState(userServiceNumberAtom);
    const [userAffiliatedUnit, setUserAffiliatedUnit] = useRecoilState(affiliatedUnitAtom);
    const [username, setUserName] = useRecoilState(userNameAtom);
    useEffect(() => {
        const token = localStorage.getItem('user');
        const token_request = JSON.parse(token);
        if (token_request) {
            setAccessToken(token_request);
        }
        if (accessToken) {
            axios.get("https://mdoms-backend.run.goorm.io/auth/users/me/", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(result => {
                setUserServiceNumber(result.data.ServiceNumber);
                setUserAffiliatedUnit(result.data.AffiliatedUnit);
                setUserName(result.data.UserName);
            })
        }
    })

    function Click_Debug(){
        console.log(ServiceNumber)
        console.log(accessToken)
    };

    return(
        <>
            <TopNav/>
            <Maincontainer>
                <SideBar />
                <Timetablecontainer>
                    <Timetable_test />
                </Timetablecontainer>
            </Maincontainer>
        </>

    )
}

export default GridTestPage;