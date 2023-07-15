import { isAuthenticated } from '../../auth/helper';
import {API} from '../../backend';

export const add = (program)=>{
    return fetch(`${API}/add`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + isAuthenticated().token
        },
        body: JSON.stringify(program)
    })
    .then(response=>{
        return response.json();
        
    })
    .catch(err=>{
        console.log(err)
    })
}

export const list = ()=>{
    return fetch(`${API}/list`, {
        method: 'GET'
    }).then(response =>{
        return response.json()
    })
    .catch((err)=>{
        console.log(err)
    })
}