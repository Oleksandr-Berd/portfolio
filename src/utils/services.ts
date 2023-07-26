import axios, {  } from "axios";


const instance = axios.create({
  baseURL:  "http://localhost:5002/api/portfolio"
});

export const addProject = async (data: {}) => {
    try {
        const response = instance.post("/projects", data);
        return response
    } catch (error) {
        return error
    }
}