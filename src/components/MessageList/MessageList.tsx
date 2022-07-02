import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storeType } from "../../redux/reducers/rootReducer";
import massageService from "../../services/massage.service";
import {Massage} from "../../types/Massage"

 const MessageList=forwardRef((props, ref)=>{
    const currentUser = useSelector((store:storeType)=>store.UserReducer);
    const [userId,setUserId]=useState<string | undefined>();
    const [messages, setMessages] = useState<Massage[]>([]);
    const paramsUrl=useParams();
  
    useEffect(()=>{
      setUserId(paramsUrl?.user_id);
    },[paramsUrl?.user_id])

    useEffect(()=>{
      if(currentUser.id!=7)
        setUserId((currentUser.id).toString());
      massageService.getAllMassageList().then((response) => {
        setMessages(response)
      })
    },[])

    useImperativeHandle(ref, () => ({
      addApi: add
    }))

    const add = (mess: Massage) => {
      debugger;
      messages.unshift(mess);
      setMessages([...messages])
    }

    return (
      <div className="MessageList">
        <h2>MessageList component</h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>נושא</th>
            <th>גוף הודעה</th>
          </tr>
        </thead>
        <tbody>{
          messages.map((item: Massage, index) => {
            if(userId && item.userId==parseInt(userId)){
                return <tr>
                    <td>{index}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            }
          })}
        </tbody>
      </Table>
        </div>
    )
})

export default MessageList;
