import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.auth.user
})

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { user } = this.props
    const permissions = (user && user.permissions) || []

    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <Link to="/" className="navbar-brand">MERN Starter App</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { user && <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {user.google.email}
                </DropdownToggle>
                <DropdownMenu right>
                  <a className="dropdown-item" href="/api/auth/signout">Logout</a>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header)