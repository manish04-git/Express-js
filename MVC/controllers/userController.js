import { userList } from "../model/userModel.js"


export function handleUsers(req,res){

  const userData=userList();

  console.log(userData);
  
res.render('user',{users:userData})
}