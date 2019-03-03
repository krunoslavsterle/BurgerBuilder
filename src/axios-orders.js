import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactjs-burger-builder-77bf6.firebaseio.com/"
});

export default instance;
