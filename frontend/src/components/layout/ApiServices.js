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
    PaidSkill(){
        return axios.post(BaseUrl+"admin/paidSkill/all",null,{headers:this.getToken()})
    }
}

export default new ApiServices;