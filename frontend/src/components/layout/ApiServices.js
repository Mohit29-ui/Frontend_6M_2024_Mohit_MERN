import axios from "axios";
export const BaseUrl = "http://localhost:5000/"
class ApiServices{
    getToken(){
        let obj={
            Authorization:sessionStorage.getItem('token')
        }
        return obj
    }
    Register(data){
        return axios.post(BaseUrl+"customer/profile/add/",data)
    }
    Login(data){
        return axios.post(BaseUrl+"customer/user/login/",data)
    }
    AllSkills(){
        return axios.post(BaseUrl+"admin/skill/all")
    }
    DeleteSkill(data){
        return axios.post(BaseUrl+"admin/skill/delete",data,{headers:this.getToken()})
    }
}

export default new ApiServices;