import { useSelector } from "react-redux"
import { storeType } from "../../redux/reducers/rootReducer"
import ContainerAdmin from "../ContainerAdmin/ContainerAdmin";
import User from "../User/User";





export default function Home(){
    const currentUser = useSelector((store:storeType)=>store.UserReducer);
 return(
    <div className="Home">
        {currentUser.id==7? <ContainerAdmin></ContainerAdmin>:<User></User>}
    </div>
 )
}