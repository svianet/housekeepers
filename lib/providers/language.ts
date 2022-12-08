import { ResponseApi } from "../../interfaces/api";
import { IProfile } from "../../interfaces/profile";

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function getLanguages() : Promise<ResponseApi> {
    let url = `${API_ENDPOINT}/language`;
    const res = await fetch(url, { 
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    });
    const data = await res.json();
    return data;
}
