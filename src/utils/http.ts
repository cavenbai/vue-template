import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Message, Loading } from 'element-ui';

let baseURL: any = process.env.VUE_APP_BASE_API || '';
let loadingInstance:any

const service = axios.create({
  timeout: 10000,
  baseURL
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    loadingInstance = Loading.service({ lock: true,text: 'Loading',spinner: 'el-icon-loading',background: 'rgba(255, 255, 255, 0.7)'});
    return config;
  },(err: any) => {
    if(loadingInstance) loadingInstance.close();
    Promise.reject(err);
  }
);

service.interceptors.response.use((response: AxiosResponse) => {
    if(loadingInstance) loadingInstance.close();
    return response;
  },(err: any) => {
    if (err && err.response && err.response.status) {
      switch (err.response.status) {
        case 401:
        case 500:
        case 404:
        default: Message.error(err.response.data.message); break;
      }
    }
    if(loadingInstance) loadingInstance.close();
    return Promise.reject(err);
  }
);

export default service;
