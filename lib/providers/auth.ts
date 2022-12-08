import { ResponseApi } from "../../interfaces/api";

const API_ENDPOINT = process.env.API_ENDPOINT;

// @todo create interfaces instead any
export async function login(params: any) : Promise<ResponseApi> {
    const res = await fetch(`${API_ENDPOINT}/auth/login`, { 
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params) 
    });
    const data = await res.json();
    return data;
}