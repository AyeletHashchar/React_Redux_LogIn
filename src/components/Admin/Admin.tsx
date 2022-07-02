

import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { UserModel as User}   from "../../types/User";
import userService from "../../services/user.service";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


export default function Admin(){
    
    const [listUsers, setListUsers] = useState<User[]>([]);
    const _navigate=useNavigate();
  
  
  
    useEffect(() => {
      userService.getAllUserList().then((response) => {
        setListUsers(response)
      })
    }, [])

  
  
    const displayMessages=(userId:number)=>{
        _navigate(`/header/home/${userId}`)
    }

    
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
    
    // onClick={()=>{displayMessages(userItem.id)}}
  },
  {
    field: 'username',
    headerName: 'User name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 110,
    editable: true,
  }
];

const rows = listUsers;

function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={(params)=>{displayMessages(params.value)}}
      />
    </Box>
  );
}
  
    return <div className="Admin">
      {/* <Button>הוסף משתמש</Button>      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>קוד</th>
            <th>שם</th>
            <th>שם משתמש</th>
            <th>מייל</th>
          </tr>
        </thead>
        <tbody>{
          listUsers.map((userItem: User, index) => {
            
            return <tr onClick={()=>{displayMessages(userItem.id)}}>
              <td>{userItem.id}</td>
              <td>{userItem.name}</td>
              <td>{userItem.username}</td>
              <td>{userItem.email}</td>
            </tr>
          })}
        </tbody> */}
      {/* </Table> */}
      {DataGridDemo()}
    </div>
}



