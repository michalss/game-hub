import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  results: T[];
  count: number;
  next: number;
}

const http = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2782f4476ae24c1aaa15c498c1cf8eb2",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getALL = (config: AxiosRequestConfig) =>
    http.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);

  // post = (config: AxiosRequestConfig) =>
  //   axios.post<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
}

export default ApiClient;
