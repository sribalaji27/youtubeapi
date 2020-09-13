import axios from "axios";

const KEY = "AIzaSyDmULtFei3Q5MDMMdindVaVrOD5Q-8igac";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
