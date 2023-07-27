import axios, {  } from "axios";



const instance = axios.create({
    baseURL: "http://localhost:5002/api/portfolio",
});

export const addProject = async (data: {}, token:string) => {
    try {
        const response = await instance.post("/projects", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        return response
    } catch (error) {
        console.log(error);
        
        return error
    }
}