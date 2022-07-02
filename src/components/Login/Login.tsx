import React, { useRef } from "react"
import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserModel as User}   from "../../types/User";

export default function Login() {

    const _navigate = useNavigate();
    const _dispatch = useDispatch();

    const userNameInput = useRef<HTMLInputElement>(null);
    const idInput = useRef<HTMLInputElement>(null);

    
    const login = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
       

      let name = userNameInput?.current?.value;
        const user = {
        name: userNameInput.current?.value,
        id: idInput.current?.value,
      } as unknown as User;
      debugger;

      _dispatch({
        data: user,
        type: "SET_USER",
      });
      _navigate("/header");

    }
    return (
        <form onSubmit={(event: any) => { login(event) }}>
            <div className="form-group">
                <label htmlFor="userName">שם משתמש</label>
                <input type="text" ref={userNameInput} className="form-control" id="userName" name="userName" defaultValue="" aria-describedby="userName" placeholder="Enter userName"></input>
               
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" ref={idInput} className="form-control" id="password" placeholder="password" defaultValue=""></input>
            </div>
        

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>)

}