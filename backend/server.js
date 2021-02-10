const express = require("express");
const connectDb = require("./config/dbConnect");
const user = require("./Routes/user");
const client = require("./Routes/client");
const branch = require("./Routes/branch");
const path = require('path');
const app = express();

app.use(express.json());
// app.use(express.static(path.join(__dirname, '../client/build')));

connectDb();
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use("/user", user);
app.use("/client", client);
app.use("/branch", branch);


const PORT = process.env.PORT || 5000;


app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);
