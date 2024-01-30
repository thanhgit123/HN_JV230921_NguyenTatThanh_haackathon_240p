import database from "../utils/database";

export async function getOneQuestionMysql(id: number) {
  const [result] = await database.execute(
    "select * from question where question_id = ? ",
    [id]
  );
  return result;
}

export async function getOneQuestionWithAnswerMysql(id: number) {
  const [result] = await database.execute(
    "select * from question inner join answer on question.question_id = answer.question_id where answer.question_id = ? ",
    [id]
  );
  return result;
}

export async function getAllQuestionMysql(category_id:number,limit:number,level:number) {
  const [result] = await database.execute(`select * from question where question.category_id = ? and level = ? limit  ${limit} ` );
  return result;
};

export async function addQuestionMysql(id:number,level:number,content:string) {
    const [result] = await database.execute("insert into question (category_id,level,) values(?,?,?) ",[id,level,content]);
    return result;
};

