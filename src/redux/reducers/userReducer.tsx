import { act } from "react-dom/test-utils";
import { UserModel as User}   from "../../types/User";

const userInitial:User={name:"moria",phone:"040408689",email:"gygy@gmail.com",username:"mor",id:2}

const UserReducer=(state:User=userInitial,action:any)=>{
    switch(action.type){
        case 'SET_USER':
            state=action.data;
            state={...state}
            break;
        default:
            break;
    }
    return state;
}
export default UserReducer;