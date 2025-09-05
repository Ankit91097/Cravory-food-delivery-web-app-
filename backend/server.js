const app = require("./src/app");
const connectCB = require("./src/db/db");

connectCB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
