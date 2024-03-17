// Libs
import axios from "axios";
// Utils
import configFile from "@/config.json";

const http = axios.create({ baseURL: configFile.apiEndPoint });

http.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            console.log("Something went wrong. Try it later :)");
        }

        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
};

export default httpService;