import myLearn from "./config";
import API from "../constants/API";

export const getLessonBySlug = async (course,lesson) => {
    return await myLearn.get(API["lesson.getLessonBySlug"](course,lesson));
}