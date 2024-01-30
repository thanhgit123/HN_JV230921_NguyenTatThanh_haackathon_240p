import express, { Request, Response } from "express";
import { addCategoryMysql, getAllTCategoryMysql, getOneTodoMysql } from "../services/category.service";

const categoryRouter = express.Router();

export async function getOneCategory(req: Request, res: Response) {
  const {id} = req.params
  try {
    const result = await getOneTodoMysql(Number(id))
    return result
  } catch (error) {
    console.log(error);
  }
};

export async function getAllCategory(req: Request, res: Response) {
  try {
    const result = await getAllTCategoryMysql()
    console.log(result)
    return result
  } catch (error) {
    console.log(error);
  }
};


export async function addCategory(req: Request, res: Response) {
  const {name} = req.body
  try {
    const result = await addCategoryMysql(String(name))
    console.log(result)
    return result
  } catch (error) {
    console.log(error);
  }
};



export default categoryRouter;
