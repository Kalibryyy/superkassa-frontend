import { io } from "socket.io-client";
const socket = io(`${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`);

export default socket;