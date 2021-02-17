import API from "../constants/API";
import myLearn from "./config";

export const getCourses = async () => {
    return await myLearn.get(API["course.all"]);
}

export const getCourseBySlug = async (slug) => {
    return await myLearn.get(API["course.getCourseBySlug"](slug));
}

