import Admin from "../Admin/Admin";
import MessageList from "../MessageList/MessageList";

export default function ContainerAdmin(){
    

    return(
        <div className="containerAdmin">
            <div className="row">
                <div className="col"><Admin></Admin></div>
                <div className="col"><MessageList></MessageList></div>
            </div>
        </div>
    )
}