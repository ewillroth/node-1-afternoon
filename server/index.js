const express = require("express");
const {json} = require("body-parser");
const messages_controller = require("./controllers/messages_controller");
const app = express();
const PORT = 3001;


app.use(json());
app.use( express.static(__dirname + '/../public/build'));

app.post("/api/messages", messages_controller.createMessage);
app.get("/api/messages", messages_controller.readMessages);
app.put("/api/messages/:id", messages_controller.updateMessages);
app.delete("/api/messages/:id", messages_controller.deleteMessage);

app.listen(PORT, ()=>console.log(`Listening on ${PORT}`))
