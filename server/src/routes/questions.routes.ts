import express from "express";
import {
    addQuestion,
    getAllQuestion,
  getOneQuestion,
  getOneWithAnswer,
} from "../controllers/question.controller";

const questionRouter = express.Router();
questionRouter.get("/getOne/:id", getOneQuestion);
questionRouter.get("/:id/answer", getOneWithAnswer);
questionRouter.get("/getAll",getAllQuestion);
questionRouter.post('/addQuestion/:id/:level/content',addQuestion);

export default questionRouter;
