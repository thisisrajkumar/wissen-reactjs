import { Navbar, Nav } from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import "./header.css";

const HeaderCom = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/class">ClassCom</Link>
                    <Link to="/fun">FunctionalCom</Link>
                    <Link to="/eventHandling">eventHandling</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default HeaderCom;