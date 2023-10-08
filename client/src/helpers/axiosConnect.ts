import axios from "axios";
import variable from "./envVariables";

const hostName = variable.hostName || "";

const server = axios.create({
  baseURL: hostName,
});

export default server;
