import React from 'react';
import Logo from '../assets/image/logo.png'
import { Icon } from '@iconify/react';

function TopNav(){
    
    return(
        <div class='bg-sky-400 flex justify-start h-16'>
            <div class='flex justify-center items-center pl-2'>
                <img src={Logo} width='60' height='82.5' />
            </div>
            <div class='justify-center items-center pl-1'>
                <div class='text-3xl font-bold text-slate-100 pt-1'>MDOMS</div>
                <div class='text-sm font-semibold text-slate-50'>부대근무자관리체계</div>
            </div>
        </div>
    )
}

export default TopNav;