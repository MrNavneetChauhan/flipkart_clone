const app = require("../index");
const connect = require("./db")

app.listen(2022,async()=>{
    await connect();
    console.log("listened to the port number 2022")
})