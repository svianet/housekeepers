import { ResponseApi } from "../../interfaces/api";

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function searchProfessionals(params: any) : Promise<ResponseApi> {
    let url = `${API_ENDPOINT}/search`;
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
