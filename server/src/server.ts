import express  from "express";
import dotenv from "dotenv"
import cors from 'cors'
import bodyParser from "body-parser";
import categoryRouter from "./routes/categories.routes";
import questionRouter from "./routes/questions.routes";

const app = express();
const PORT = 7890;
dotenv.config();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));



app.use("/api/v1/category",categoryRouter)
app.use('/api/v1/question',questionRouter)
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})