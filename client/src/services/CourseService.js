import $api from "../http";


export default class CourseService {
    static async getCourse(){
        return $api.get("course/3/")
    }
}