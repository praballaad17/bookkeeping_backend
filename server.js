const express = require("express");
const user = require("./routes/user");
const auth = require("./routes/auth");
const business = require("./routes/busRoutes");
const items = require("./routes/itemRoutes");
const invoice = require("./routes/invoiceRoutes");
const party = require("./routes/partyRoutes");
const http = require("http");
require("dotenv").config();

const app = express();
require("./startups/cors")(app);
const server = http.createServer(app);

app.use(express.json({ limit: "50mb" }));
require("./startups/dotenv")();
const { mongofunction } = require("./startups/mongodb");
mongofunction(app);

app.get("/", (req, res) => {
  res.send("server is up and running!");
});

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/business", business);
app.use("/api/item", items);
app.use("/api/invoice", invoice);
app.use("/api/party", party);

const port = process.env.PORT || 3003;
server.listen(port, () => console.log(`Listening on port ${port}...`));
