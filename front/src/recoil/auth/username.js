import {atom} from 'recoil';

const userNameAtom = atom({
    key: 'username',
    default: ''
});

export default userNameAtom