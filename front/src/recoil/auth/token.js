import { atom } from "recoil";

const accessTokenAtom = atom({
    key: 'accessTokenAtom',
    default: ''
});

export default accessTokenAtom