import internal from "stream";

export type UserModel={
    name:string;
    id: number;
    username:string;
    email:string;
    address?:{}
    phone:string;
    website?:string,
    company?:string
}