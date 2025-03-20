import axios from "axios";
export const BaseUrl = "http://localhost:5000/"
class ApiServices{
    getToken(){
        let obj={
            Authorization:sessionStorage.getItem("token")
        }
        return obj
    }
    Register(data){
        return axios.post(BaseUrl+"customer/profile/add/",data)
    }
    Login(data){
        return axios.post(BaseUrl+"customer/user/login/",data)
    }
    ChangePassword(data){
        return axios.post(BaseUrl+"customer/user/changePassword",data)
    }
    Dashboard(){
        return axios.post(BaseUrl+"admin/dashboard",null,{headers:this.getToken()})
    }
    AllSkills(){
        return axios.post(BaseUrl+"admin/skill/all")
    }
    SingleSkills(data){
        return axios.post(BaseUrl+"admin/skill/single",data)
    }
    AddSkills(data){
        return axios.post(BaseUrl+"admin/skill/add",data,{headers:this.getToken()})
    }
    UpdateSkills(data){
        return axios.post(BaseUrl+"admin/skill/update",data,{headers:this.getToken()})
    }
    DeleteSkill(data){
        return axios.post(BaseUrl+"admin/skill/delete",data,{headers:this.getToken()})
    }
    AllUsers(){
        return axios.post(BaseUrl+"admin/profile/all",null,{headers:this.getToken()})
    }
    ChangeStatus(data){
        return axios.post(BaseUrl+"admin/profile/changeStatus",data,{headers:this.getToken()})
    }
    ViewUser(data){
        return axios.post(BaseUrl+"admin/profile/single",data,{headers:this.getToken()})
    }
    FreeSkillAll(){
        return axios.post(BaseUrl+"admin/freeskill/all",null,{headers:this.getToken()})
    }
    FreeSkillSingle(data){
        return axios.post(BaseUrl+"admin/freeskill/single",data,{headers:this.getToken()})
    }
    PaidSkillAll(){
        return axios.post(BaseUrl+"admin/paidskill/all",null,{headers:this.getToken()})
    }
    SinglePaidSkill(data){
        return axios.post(BaseUrl+"admin/paidskill/single",data,{headers:this.getToken()})
    }
    RequestAll(){
        return axios.post(BaseUrl+"admin/request/all",null,{headers:this.getToken()})
    }
    RequestSingle(data){
        return axios.post(BaseUrl+"admin/request/single",data,{headers:this.getToken()})
    }
    ProgressAll(){
        return axios.post(BaseUrl+"admin/progress/all",null,{headers:this.getToken()})
    }
    ProgressSingle(data){
        return axios.post(BaseUrl+"admin/progress/single",data,{headers:this.getToken()})
    }

    // customer requests

    CusAllSkills(){
        return axios.post(BaseUrl+"admin/skill/all")
    }
    CusSingleSkills(data){
        return axios.post(BaseUrl+"admin/skill/single",data)
    }
    CusViewUser(data){
        return axios.post(BaseUrl+"customer/profile/single",data,{headers:this.getToken()})
    }
    CusProfileUpdate(data){
        return axios.post(BaseUrl+"customer/profile/update",data,{headers:this.getToken()})
    }
    CusFreeSkillAdd(data){
        return axios.post(BaseUrl+"customer/freeskill/add",data,{headers:this.getToken()})
    }
    CusFreeSkillAll(){
        return axios.post(BaseUrl+"customer/freeskill/all")
    }
    CusFreeSkillSingle(data){
        return axios.post(BaseUrl+"customer/freeskill/single",data)
    }
    CusFreeSkillUpdate(data){
        return axios.post(BaseUrl+"customer/freeskill/update",data,{headers:this.getToken()})
    }
    CusFreeSkillDelete(data){
        return axios.post(BaseUrl+"customer/freeskill/delete",data,{headers:this.getToken()})
    }
    CusPaidSkillAdd(data){
        return axios.post(BaseUrl+"customer/paidskill/add",data,{headers:this.getToken()})
    }
    CusPaidSkillAll(){
        return axios.post(BaseUrl+"customer/paidskill/all")
    }
    CusPaidSkillSingle(data){
        return axios.post(BaseUrl+"customer/paidskill/single",data)
    }
    CusPaidSkillUpdate(data){
        return axios.post(BaseUrl+"customer/paidskill/update",data,{headers:this.getToken()})
    }
    CusPaidSkillDelete(data){
        return axios.post(BaseUrl+"customer/paidskill/delete",data,{headers:this.getToken()})
    }
    CusRequestAdd(data){
        return axios.post(BaseUrl+"customer/request/add",data,{headers:this.getToken()})
    }
    CusRequestAll(){
        return axios.post(BaseUrl+"customer/request/all",{headers:this.getToken()})
    }
    CusRequestSingle(data){
        return axios.post(BaseUrl+"customer/request/single",data,{headers:this.getToken()})
    }
    CusRequestUpdate(data){
        return axios.post(BaseUrl+"customer/request/update",data,{headers:this.getToken()})
    }
    CusRequestDelete(data){
        return axios.post(BaseUrl+"customer/request/delete",data,{headers:this.getToken()})
    }
    CusProgressAdd(data){
        return axios.post(BaseUrl+"customer/progress/add",data,{headers:this.getToken()})
    }
    CusProgressAll(){
        return axios.post(BaseUrl+"customer/progress/all")
    }
    CusProgressSingle(data){
        return axios.post(BaseUrl+"customer/progress/single",data)
    }
    CusProgressUpdate(data){
        return axios.post(BaseUrl+"customer/progress/update",data,{headers:this.getToken()})
    }
    CusProgressDelete(data){
        return axios.post(BaseUrl+"customer/progress/delete",data,{headers:this.getToken()})
    }
}

export default new ApiServices;