import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import NavBarStyles from 'components/NavBar/NavBarStyles';

export default class CustomNavbar extends React.Component {
  render() {
    return (
      <NavBarStyles>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="http://alphonso.tv">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="http://alphonso.tv">Home</a></li>
              <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="http://alphonso.tv">Page 1 <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="http://alphonso.tv">Page 1-1</a></li>
                  <li><a href="http://alphonso.tv">Page 1-2</a></li>
                  <li><a href="http://alphonso.tv">Page 1-3</a></li>
                </ul>
              </li>
              <li><a href="http://alphonso.tv">Page 2</a></li>
              <li><a href="http://alphonso.tv">Page 3</a></li>
            </ul>
          </div>
        </nav>
      </NavBarStyles>
    );
  }
}
