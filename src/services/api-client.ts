import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aeff097c08414ac38198f951b527097e",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
