import { ResponseApi } from "../../interfaces/api";
import { IProfile } from "../../interfaces/profile";

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function getProfile(params: any) : Promise<ResponseApi> {
    let url = `${API_ENDPOINT}/account/retrieveProfile`;
    const res = await fetch(url, { 
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params) 
    });
    const data = await res.json();
    return data;
}

// can be save all user info or partial
export async function saveProfile(params: IProfile) : Promise<ResponseApi> {
    const { pers_id } = params.person;
    const { person } = params;
    
    let url = `${API_ENDPOINT}/person`;
    let method = 'POST';
    if (pers_id) {
        // update
        url += `/${pers_id}`;
        method = 'PATCH';
    }
    console.log(url, pers_id);
    const res = await fetch(url, { 
        headers: {
            'Content-Type': 'application/json'
        },
        method: method,
        body: JSON.stringify(person) 
    });
    const data = await res.json();
    console.log(data);
    return data;
}