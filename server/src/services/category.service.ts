import database from "../utils/database";

export async function getOneTodoMysql(id:number) {
  const [result] = await database.execute("select * from category where category_id = ? ",[id]);
  return result;
}


export async function getAllTCategoryMysql() {
  const [result] = await database.execute("select * from category ",);
  return result;
};

export async function addCategoryMysql(name:string) {
  const [result] = await database.execute("insert into category (name) values (?) ",[name]);
  return result;
}



