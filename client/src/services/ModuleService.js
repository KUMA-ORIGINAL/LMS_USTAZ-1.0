import $api from "../http";

export default class ModuleService{
    static async getModule(id){
        return $api.get(`course/module/?course_id=${id}`)
    }
    static async getLectures(id){
        return $api.get(`course/content/?module_id=${id}`)
    }
    static async getLecture(id){
        return $api.get(`course/content/${id}/`)
    }
    static async createModule({ title, description, course}){
        return $api.post("course/module/", {title, description, course})
    }
    static async createContent({title, description, module}){
        return $api.post("course/content/", {title, description, module})
    }
    static async imageUpload(img){
        return $api.post("/image", {img})
    }
}