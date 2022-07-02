import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { UserModel } from "../../types/User";
import userService from "../../services/user.service";
import MessageList from "../MessageList/MessageList";
import AddMessage from "../AddMessage/AddMessage";
import { Massage } from "../../types/Massage";

type ListUserProps = {};
export default function User() {
  const listApiRef = useRef<Massage[]>();

  return (
    <div className="user">
      <div className="row">
        <div className="col">
          <MessageList ref={listApiRef}></MessageList>
        </div>
        <div className="col">
          <AddMessage listApiRef={listApiRef}></AddMessage>
        </div>
      </div>
    </div>
  );
}
