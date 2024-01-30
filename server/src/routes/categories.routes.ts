import express from "express";
import { addCategory, getAllCategory, getOneCategory } from "../controllers/category.controller";

const categoryRouter = express.Router();
categoryRouter.get("/getOne/:id",getOneCategory);
categoryRouter.get('/getAll',getAllCategory);
categoryRouter.post('/addCategory',addCategory)

export default categoryRouter;
