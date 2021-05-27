const app = require("express")();
const os = require("os-utils");
const httpServer = require("http").createServer(app);
const si = require("systeminformation");

const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  setInterval(() => {
    let freeMemory = os.freemem();
    let totalMemory = os.totalmem();
    let memoryUsage = Math.round((freeMemory / totalMemory) * 1000);
    let seconds = Math.round((os.sysUptime() * os.processUptime()) / 1000000);
    let internetUsage = os.freememPercentage(); // just to simulate fake internet usage
    socket.emit("network", internetUsage);
    socket.emit("memory", memoryUsage);
    socket.emit("seconds", seconds);
    os.cpuUsage((c) => {
      socket.emit("cpu", Math.round(c * 100));
      socket.emit("disk", Math.round(c * 100));
    });
  }, [2000]);
});

httpServer.listen(4000, function () {
  console.log("server running at port 4000");
});
