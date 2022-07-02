import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { storeType } from '../../redux/reducers/rootReducer';
import './Header.scss'


interface HeaderProps { }

export default function Header(props: HeaderProps) {

    const currentUser = useSelector((store:storeType)=>store.UserReducer);
    const _navigate = useNavigate();
    useEffect(() => {
      _navigate("home");
    }, []);

    return (<div className="Header">
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto"> 
                <Nav.Link ><Link to="home">Home</Link></Nav.Link>
                <Nav.Link ><Link to="about">About</Link></Nav.Link>
                {currentUser.id==7? <Nav.Link><Link to="home">Add User</Link></Nav.Link>:""}
                </Nav>
            </Container>
        </Navbar>
        <Outlet></Outlet>
    </div>)

}