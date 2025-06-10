import axiosInstance from "../../utils/httpClient";

export const getSpaces = () =>
  axiosInstance.get(
    "/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json"
  );
