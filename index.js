import express from "express"
import bodyParser from "body-parser"


import userRouter from "./users.js"

const app = express();
const PORT = 5000


app.use(bodyParser.json())


app.use("/", userRouter)

app.get("/", (req,res) => res.send("Hello World"))


app.listen(PORT, () => console.log(`currenrtly on port: http://localhost:${PORT}`))
