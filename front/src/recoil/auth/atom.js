import { atom } from "recoil";

const userServiceNumberAtom = atom({
    key: 'servicenumber',
    default: ''
});

export default userServiceNumberAtom;
