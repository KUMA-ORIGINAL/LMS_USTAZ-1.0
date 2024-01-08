import $api from "../http";

export default class AttendanceService {
    static async getAttendance(){
     $api.get("course")   
    }
}