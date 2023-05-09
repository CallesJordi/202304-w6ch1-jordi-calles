import axios from "axios";
import { useCallback } from "react";

export const apiURL = import.meta.env.VITE_APP_URL;

const useApi = () => {
  const getTodos = useCallback(async () => {
    const { data: todos } = await axios.get(`${apiURL}`);
    return todos;
  }, []);
  return { getTodos };
};

export default useApi;
