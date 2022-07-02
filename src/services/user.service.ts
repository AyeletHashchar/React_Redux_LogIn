
import axios from "axios"
import { UserModel } from "../types/User"

class UserService {
    async getAllUserList() {
        
    let listUser =await axios.get('https://jsonplaceholder.typicode.com/users');
     let allUsers:UserModel  [] =listUser.data;  
     return allUsers;
     }
}


export default new UserService