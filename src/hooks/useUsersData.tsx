import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type SuccessResponse from "../types/Response.type";

const fetch = () =>
  axios.get(process.env.REACT_APP_ENDPOINT || "").then((res) => res.data);

const useUsersData = () =>
  useQuery<SuccessResponse, SuccessResponse>({
    queryKey: ["users"],
    queryFn: fetch,
    onError: (err) => {
      console.error(err);
      return [];
    },
  });

export default useUsersData;
