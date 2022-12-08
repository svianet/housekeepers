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
    let url = `${API_ENDPOINT}/account/saveprofile`;
    let method = 'POST';
    const res = await fetch(url, { 
        headers: {
            'Content-Type': 'application/json'
        },
        method: method,
        body: JSON.stringify(params) 
    });
    const data = await res.json();
    return data;
}