const http = require("http");
const connectToDb = require("./DBconnection/mongoDb");
const app = require("./Routes/Route");

const PORT = 3006;

http.createServer(app).listen(PORT, () => {
    new connectToDb();
    console.log("Server is running");
});
