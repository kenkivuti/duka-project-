
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout(){

    return(
        <div className="Layout">
            <header className="layout-header">
            
        <Container>
          <Navbar.Brand href="/">My Duka</Navbar.Brand>
          <Nav className="me-auto">
             <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/Sales">Sales</Nav.Link>
                <Nav.Link href="/Products">Products</Nav.Link>
                <Nav.Link href="/Register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Container>
                <header>
                    <main>
                        <Outlet/>
                    </main>
                </header>

            </header>
        </div>

    )

}

export default Layout;