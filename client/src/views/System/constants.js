export const SOCKET_URL = "http://localhost:4000";

export const SOCKET_KEYS = {
    connection: "connection",
    cpu: "cpu",
    memory: "memory",
    disk: "disk", 
    seconds: "seconds",
    network: "network"
}

export const connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    timeout: 10000, //before connect_error and connect_timeout are emitted.
    transports: ["websocket"],
  };