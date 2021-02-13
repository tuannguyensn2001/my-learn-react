import jwt from "jsonwebtoken";
import {refresh} from "./authService";
import store from "../app/store";
import {setLoggedIn} from "../slice/authSlice";

export const refreshToken =  () => {
    const token = localStorage.getItem('user_token') ?? '';
    jwt.verify(token,'phhsPAG30Cv0Z0dbYD5ayCVW6EPGCKDF2sUnIC2Z8EsvUJYfLcbeEktwt4k8D9ui',(err,decoded)=>{
        if (err && err.name === 'TokenExpiredError') {
                refresh()
                    .then(response => {
                        store.dispatch(setLoggedIn(response.data));
                        return true;
                    })
                    .catch(err => console.log(err));
        }
        return false;
    })
}