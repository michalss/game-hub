import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2782f4476ae24c1aaa15c498c1cf8eb2",
  },
});
