
import axios from "axios"
import { Massage } from "../types/Massage";
class massageService {
    async getAllMassageList() {
        
        let listMassge =await axios.get('https://jsonplaceholder.typicode.com/posts');
         let allMassage:Massage  [] =listMassge.data;  
         return allMassage;
         }
}


export default new massageService