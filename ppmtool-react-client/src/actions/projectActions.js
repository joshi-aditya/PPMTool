import axios from "axios";
import { GET_ERRORS } from "../actions/types";
import { async } from "q";

export const createProject = (project, history) = async dispatchEvent => {
    try{
        const res = await axios.post("http://localhost:8080/api/project", project)
        history.push("/dashboard");

    } catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}
