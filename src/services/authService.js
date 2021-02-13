import API from "../constants/API";
import myLearn from "./config";
import {refreshToken} from "./middleware";




export const login = async (data) => {
    return await myLearn.post(API["auth.login"], data);
}

export const me = async () => {
    return await myLearn.post(API['auth.me']);
}

export const refresh = async () => {
    return await myLearn.post(API["auth.refresh"]);
}