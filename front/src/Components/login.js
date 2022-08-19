import React, {useState} from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import userServiceNumberAtom, {loginStateAtom} from '../recoil/auth';

function LoginForm() {
    const userServiceNumber = useSetRecoilState(userServiceNumberAtom)
    const [loginstate, setLoginState] = useRecoilState(loginStateAtom)
    const [insertValue, setInsertValue] = useState({
        ServiceNumber: '',
        Password: '',
    })
    
    const {ServiceNumber, Password} = insertValue;

    const onChangeinsertValue = (event) => {
        const {value, name} = event.target;
        setInsertValue({
          ...insertValue,
          [name]: value
        });
      };
    

    
    return (
        <div class = 'bg-slate-200 h-screen flex'>
            <div class='w-96 bg-white container mx-auto my-auto shadow-xl'>
                <div class='block pb-8 pt-8 text-center text-xl font-bold tracking-wide'>
                    REACTERS
                </div>
                <div class='ml-4 mr-4'>
                    <div class='mb-2 text-left text-lg font-extrabold'>
                        로그인
                    </div>
                    <input type="text" name='ServiceNumber'value={ServiceNumber} onChange = {onChangeinsertValue} class='text-base w-full border-b border-b-slate-500 pl-1 pt-2 pb-2 mb-4 ' placeholder='군번'></input>
                    <input type="text" name='Password'value={Password} onChange = {onChangeinsertValue} class='text-base w-full border-b border-b-slate-500 pl-1 pt-2 pb-2 mb-5' placeholder='비밀번호'></input>
                    <button class="py-2 px-4 pt-3 pb-3 w-full font-semibold rounded-lg shadow-md text-white bg-cyan-600 hover:bg-cyan-700 mb-3">
                        로그인
                    </button>
                    <button class="py-2 px-4 pt-3 pb-3 w-full font-semibold rounded-lg shadow-md text-white bg-cyan-600 hover:bg-cyan-700 mb-10">
                        로그인 정보
                    </button>
                    {/* <div class='pb-4 text-right underline'>
                        <Link to='/register'>회원가입</Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default LoginForm;