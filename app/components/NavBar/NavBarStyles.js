import styled from 'styled-components';

const NavBarStyles = styled.div`
  background-color: #c00;
  height: 65px;
  font: 200 14px/1.5  'Montserrat', sans-serif;

  .navbar-inverse {
    background-color: black;
    border-color: #080808;
}

  .navbar-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }

  .navbar-content-left {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-content-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar-page-title a {
    color: white;
    font-size: 24px;
    font-weight: 100;
    text-decoration: none;
    &:hover {
      color: #ccc;
      transition: 0.1s ease;
    }
  }

  .navbar-logo {
    padding: 5px 20px 0px;
  }

  .navbar-logo-img {
    width: 100px;
    height: 100%;
  }

  .row {
    height: 100%;
  }

  .dropdown {
    list-style: none;
     > a {
      color: white;
      text-decoration: none;
      font: 200 14px/1.5  'Montserrat', sans-serif;
      &:hover {
        color: #ccc;
        transition: 0.2s ease;
      }
    }
  }

  .navbar-page-dropdown {
    padding: 3px 5px 0px 0px;
  }

  .dropdown-menu {
    border-radius: 1px;
    > li {
      font: 200 14px/1.5  'Montserrat', sans-serif;
    }
  }

  .caret {
    vertical-align: 10%;
  }

`;

export default NavBarStyles;
