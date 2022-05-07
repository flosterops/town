import { useState, useCallback, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

export enum Statuses {
  failed,
  init,
  inProgress,
  successful,
}

export default function useRequest (params?: AxiosRequestConfig) {
  const [status, setStatus] = useState(Statuses.init);
  const [data, setData] = useState<any>(null);

  const send = useCallback((params: AxiosRequestConfig) => {
    setStatus(Statuses.inProgress);
    return axios(params)
      .then((res) => {
        setData(res.data);
        setStatus(Statuses.successful);
        return res.data;
      })
      .catch((err) => {
        setData(err);
        setStatus(Statuses.failed);
        return err;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clean = useCallback(() => {
    setStatus(Statuses.init);
    setData(null);
  }, []);

  useEffect(
    function () {
      if (params) {
        send(params);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { data, status, send, clean };
}
