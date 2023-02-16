import axios from "axios";

export default async function callAPI(
    endpoint: string,
    method: string,
    body?: any
) 
{
    return await axios({
        method: method,
        url: "http://localhost:8080/api/" + endpoint,
        data: body,
    }).catch((err: any) => {
        console.log(err);
    });
}
