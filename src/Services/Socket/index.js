import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://18.142.137.253:3001";

export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"],
});
