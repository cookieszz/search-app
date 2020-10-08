import Axios from "axios";

export const getData = async (title: string) =>
  Axios.get(`http://localhost:9000/api/posts/${title}`);
