import Axios, { AxiosInstance } from "axios";

class SearchApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = Axios.create({ baseURL: "http://localhost:9000/api" });
  }

  getPosts = ({ title }: { title: string }) => this.api.get(`/posts/${title}`);
}

export default new SearchApiService();
