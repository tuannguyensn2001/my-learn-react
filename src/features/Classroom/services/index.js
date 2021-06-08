import myLearn from "../../../services/config";
import API from "../constants/API";

export const fetchAPICreateClassroom = (data) => {
    return myLearn.post(API.create_classroom, data);
}

export const fetchAPIGetClassroom = () => {
    return myLearn.get(API.get_classroom);
}