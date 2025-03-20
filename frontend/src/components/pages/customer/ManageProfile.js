import { useEffect } from "react";
import ApiServices from "../../layout/ApiServices";

export default function ManageProfile(){
    const id = sessionStorage.getItem("_id") 
    useEffect(()=>{
        ApiServices.ViewUser(id)
        .then(()=>{

        })
        .catch()
    })
}