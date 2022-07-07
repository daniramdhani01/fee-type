import { Navbar, Nav, NavDropdown, Badge, Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import pic and icon
import logo from "../assets/icons/logo.svg"
import user from "../assets/dummypic/user.jpg"
import qustionmark from "../assets/icons/question-circle-fill.svg"
import bell from "../assets/icons/bell.svg"
import signout from "../assets/icons/signout.svg"
import person from "../assets/icons/person-fill.svg"
import unlock from "../assets/icons/unlock-fill.svg"


export default function Header() {
    const navigate = useNavigate()
    const userIcon = (
        <img alt="#"
            src={user}
            className="nav-user-icon rounded-circle"
        />
    )
    return (
        <div>
            <Navbar bg="light" expand="lg" className="shadow bg-white py-0 px-5 w-100">
                <Navbar.Brand onClick={() => navigate('/master-data-management/fee-type')} className="pointer"><img alt="#" src={logo} className="nav-logo" style={{ height: "8vh", }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="w-100 d-flex justify-content-end align-items-center">
                        <Nav.Link>
                            <img alt="#" src={qustionmark} className="nav-icon rounded-circle" style={{ border: "grey 2px solid" }} />
                        </Nav.Link>
                        <Nav.Link >
                            <div className="position-relative">
                                <img alt="#" src={bell} className="nav-icon" />
                                <Badge bg="danger" pill className="position-absolute top-0 translate-middle p-2 border border-light rounded-circle" style={{ left: "30px" }}>
                                    <span className="visually-hidden">unread messages</span>
                                </Badge>
                            </div>
                        </Nav.Link>
                        <NavDropdown align="end" title={userIcon} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" className="d-flex align-items-center mb-3">
                                {userIcon}
                                <div className="ms-2 d-flex flex-column" style={{ lineHeight: "10px" }}>
                                    <h5 className="nav-user-name">Patrick Jane</h5>
                                    <span className="nav-user-desc">Administrator</span>
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <img alt="#" src={person} className="nav-dd-icons mb-1" /> My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <img alt="#" src={unlock} className="nav-dd-icons mb-1" /> Change Password
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <img alt="#" src={signout} className="nav-dd-icons mb-1" /> Sign Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
            <Breadcrumb className="=px-5 py-4">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}