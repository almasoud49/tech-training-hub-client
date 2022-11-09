import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHubspot, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'


const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then( () =>{   
        })
        .catch(error => console.error(error))
    }
return (
    <Navbar className='mb-3' collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
        <Navbar.Brand href="#home"> <FaHubspot></FaHubspot>Tech Training Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link><Link to='/'>All Courses</Link></Nav.Link>
            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
            <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link to='/toggle'>Toggle</Link></Nav.Link>
            </Nav>
        <Nav>
            <Nav.Link href="#deets">
                <>
                {
                user?.uid ?
                   <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut}>Log out</button>
                   </>
                    :
                    <>
                    <Link className='me-3' to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    </>
                }
                </>
                </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
              user?.photoURL ?
              <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image>: <FaUser></FaUser>
            }
            </Nav.Link>
        </Nav>
        <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
        </div>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
};

export default Header;

