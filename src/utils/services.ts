import axios, { AxiosResponse } from "axios";
import { IFetchProjects } from "./interfaces";



const instance = axios.create({
    baseURL: "http://localhost:5002/api/portfolio",
});

export const getAll = async (args: IFetchProjects): Promise<AxiosResponse<any>> => {
  const { difficulty, tech, currentPage } = args;
  
  try {
    const response = await instance.get<any>(
      `/projects?difficulty=${difficulty}&tech=${tech}&page=${currentPage}`
    );

    return response;
  } catch (error: any) {
    console.log(error);

    return error;
  }
};

export const getProjectDetail = async (title: String): Promise<AxiosResponse<any>> => {
  try {
    const response = await instance.get<any>(`/projects/${title}`);

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


