import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type SuccessResponse from "../types/Response.type";

const fetch = () =>
  axios.get(process.env.REACT_APP_ENDPOINT || "").then((res) => res.data);

const useUsersData = () =>
  useQuery<SuccessResponse>({
    queryKey: ["users"],
    queryFn: fetch,
  });

export default useUsersData;
