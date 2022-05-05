const mongoose = require("mongoose");

class mongo {
    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {
        mongoose.connect(
            "mongodb+srv://masai:school@cluster0.kd54o.mongodb.net/nykaa?retryWrites=true&w=majority"
        );
        mongoose.connection.once("open", () => {
            console.log("MongoDb is Connected");
        });
        mongoose.connection.on("error", () => {
            console.log("Error occured in MongoDb Connection");
        });
    }
}

module.exports = mongo;
