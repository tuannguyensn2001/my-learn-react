import {useState,useEffect} from "react";
import {getCourses} from "../services/courseServices";

export default function (){
    const [courses,setCourses] = useState([]);

    useEffect(() => {
        getCourses()
            .then(response => setCourses(() => response.data.data))
            .catch(err => console.log(err));
    },[])

    return {courses,setCourses};
}
