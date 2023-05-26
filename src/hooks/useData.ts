import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import ApiClient, { FetchResponse } from "../services/api-client";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  return { data, error, isLoading };
};

export default useData;
