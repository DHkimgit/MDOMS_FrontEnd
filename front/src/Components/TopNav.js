import React from 'react';
import Logo from '../assets/image/logo.png'
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const TopBox = styled.div`
    background-color: rgb(30 41 59);
    display: flex;
    justify-content: flex-start;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    height: 72px;
    `
const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.5rem;
    margin-right: 16px;
`
const TextBox = styled.div`
    justify-content: center;
    align-items: center;
    padding-left: 0.25rem;
    line-height: 72px;
    `
const MainText = styled.div`
    font-size: 24px; /* 30px */
    color: rgb(241 245 249);
    font-weight: 700;
    line-height: 16px;
    padding-top: 21px;
`
const SubText = styled.div`
    font-size: 12px; /* 14px */
    line-height: 1.25rem; /* 20px */
    color: rgb(248 250 252);
    font-weight: 600;
`
{/* <div class='bg-slate-800 shadow-lg flex justify-start h-16'> */}
{/* <div class='flex justify-center items-center pl-2'> */}
{/* <div class='justify-center items-center pl-1'> */}
function TopNav(){
    
    return(
        <TopBox>
            <ImageBox>
                <img src={Logo} width='48' height='40' />
            </ImageBox>
            <TextBox>
                <MainText>TESTING</MainText>
                <SubText>아전역하고싶다</SubText>
            </TextBox>
        </TopBox>
    )
}

export default TopNav;