import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Disneyheader from "../assets/disneyheader.png"

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/catindex">See all cats in your area!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="../CatNew">
                Create New Profile
              </NavLink>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;