import { useState } from "react";
import React from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";


function HeaderComponent() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return(
        <React.Fragment>
            <Navbar dark expand="md">
                <div className="contaiter" style={{"display" : "flex"}}>
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" height="30" width="41"/></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                            <NavLink className='nav-link' to='/StaffList'><span className="fa fa-users fa-lg" aria-hidden="true"></span> Staff List</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className='nav-link' to='/Departments'><span className="fa fa-address-card-o fa-lg"></span> Departments</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className='nav-link' to='/Salary'><span className="fa fa-money fa-lg"></span> Salary</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    )
}
export default HeaderComponent



