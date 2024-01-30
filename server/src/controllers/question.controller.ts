import  express, { Request, Response }  from 'express';
import { addQuestionMysql, getAllQuestionMysql, getOneQuestionMysql, getOneQuestionWithAnswerMysql } from '../services/question.service';

const questionRouter = express.Router();

export async function getOneQuestion(req: Request, res: Response) {
    const {id} = req.params
   try {
        const result = await getOneQuestionMysql(Number(id))
   } catch (error) {
    console.log(error)
   }
  };


  export async function getOneWithAnswer(req: Request, res: Response) {
    const {id}= req.params
   try {
        const result = await getOneQuestionWithAnswerMysql(Number(id))
        console.log( result)
   } catch (error) {
    console.log(error)
   }
  };

  export async function getAllQuestion(req: Request, res: Response) {
   try {
        const {category, limit, level} = req.query
        const result = await getAllQuestionMysql(Number(category),Number(limit) ,Number(level) )
        console.log(result)
   } catch (error) {
    console.log(error)
   }
  };

  export async function addQuestion(req: Request, res: Response) {
    const {id,level} = req.params
    const {content} = req.body
    try {
         const result = await addQuestionMysql(Number(id),Number(level),String(content))
    } catch (error) {
     console.log(error)
    }
   };

   



  export default questionRouter