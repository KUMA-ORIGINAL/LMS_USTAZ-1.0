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
    static async createContent({title, content_html, module}){
        return $api.post("course/content/", {title, content_html, module})
    }
    static async updateContent(id, data) {
        return $api.patch(`course/content/${id}/`, data);
    }
    static async deleteContent(id){
        return $api.delete(`course/content/${id}`)
    }
    static async updateModule(id, data) {
        return $api.patch(`course/module/${id}/`, data)
    }
    static async deleteModule(id){
        return $api.delete(`course/module/${id}`)
    }
    static async imageUpload(img){
        return $api.post("/image", {img})
    }
}