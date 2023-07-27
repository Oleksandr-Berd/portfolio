import axios, { AxiosResponse } from "axios";



const instance = axios.create({
    baseURL: "http://localhost:5002/api/portfolio",
});

export const getAll = async (): Promise<AxiosResponse<any>> => {
  try {
    const response = await instance.get<any>("/projects");

    return response;
  } catch (error: any) {
    console.log(error);

    return error;
  }
};

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

export const updateCover = async (data: {}, title: string, token: string) => {
  try {
    const response = await instance.patch("/projects/cover", {data, title}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
};