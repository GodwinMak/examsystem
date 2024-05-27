const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
  res.send('<h1>hello world</h1>');
})


const userRouter = require("./routers/userRoutes");
const testRouter = require("./routers/testRoutes");

app.use("/api/users", userRouter);
app.use("/api/tests", testRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})