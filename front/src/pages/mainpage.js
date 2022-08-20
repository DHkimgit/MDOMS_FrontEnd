import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import TopNav from '../Components/TopNav'
import { accessTokenAtom } from '../recoil/auth';
import axios from 'axios';
import userServiceNumberAtom from '../recoil/auth/atom';

function MainPage() {
    const accessToken = useRecoilValue(accessTokenAtom);
    const [ServiceNumber, setUserServiceNumber] = useRecoilState(userServiceNumberAtom);
    useEffect(() => {
        if (accessToken) {
            axios.get("https://mdoms-backend.run.goorm.io/auth/users/me/", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(result => {
                setUserServiceNumber(result.data.ServiceNumber);
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
            <div>{ServiceNumber}</div>
            <button onClick={Click_Debug}>확인</button>
        </>

    )
}

export default MainPage;