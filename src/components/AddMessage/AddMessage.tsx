import { useRef } from "react";
import { useSelector } from "react-redux";
import { storeType } from "../../redux/reducers/rootReducer";
import { Massage } from "../../types/Massage";

 const AddMessage=(props:any)=>{

    const currentUser = useSelector((store:storeType)=>store.UserReducer);
    const titleInput = useRef<HTMLInputElement>(null);
    const bodyInput = useRef<HTMLInputElement>(null);

    
    const addMessage = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const newMessage = {
        title: titleInput.current?.value,
        body: bodyInput.current?.value,
        userId: currentUser.id
      } as unknown as Massage;
      debugger;
      props.listApiRef.current.addApi(newMessage);
    }
    return (
        <div className="AddMessage">
            <form onSubmit={(event: any) => { addMessage(event) }}>
                <div className="form-group">
                    <label htmlFor="title">כותרת</label>
                    <input type="text" ref={titleInput} className="form-control" id="title" name="title" defaultValue="" aria-describedby="title" placeholder="Title"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="body">גוף הודעה</label>
                    <input type="text" ref={bodyInput} className="form-control" id="body" placeholder="Body" defaultValue=""></input>
                </div>
                <button type="submit" className="btn btn-primary">הוסף</button>
            </form>
        </div>
        )
}

export default AddMessage;
