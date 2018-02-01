import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  font: normal 14px/1.5  'Montserrat', sans-serif;
  width: 100%;
  background: #f1f1f1;
  padding-bottom: 185px;
  .show-grid {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .grid-inner-wrapper {
    padding: 0 5px;
  }
  .navbar-top-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 20px;
  }
  .navbar-insights {
    padding: 10px 0px 20px;
  }
  .navbar-insights-logo-img {
    width: 145px;
    height: auto;
  }
  .navbar-search-container {
    display: flex;
    flex-direction: row;
  }
  .row.navbar-inputs > * { margin-bottom: 5px;}
  .row.navbar-inputs .input-or { display: inline-block; margin-right: 5%; }
`;

export const NavbarTitle = styled.div`
  font-family: Montserrat, san-serif;
  font-weight: 600;
  font-size: 40px;
  color: #333;
`;

export const NavbarContainerSmall = styled.div`
  background: white;
  .navbar-small-wrapper {
    width: 100%;
    border-bottom: 1px solid #cccccc;
    background: white;
    z-index: 10;
    // overflow: auto;
    .row {
      margin-right: 0;
      margin-left: 0;
    }
  }
  .navbar-small {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 5px;
    height: 62px;
  }
  .navbar-small-left {
    display: flex;
    flex-direction: row;
  }
  .navbar-small-right {
    display: flex;
    flex-direction: row;
  }
  .navbar-small-left-logo img{
    height: 42px;
    width: auto;
  }
  .navbar-small-right-linkedinoauth {
    margin-left: 20px;
    margin-top: 10px;
  }
  .header-wrapper {
    position: fixed;
    z-index: 1001;
    top: 0;
    width: 100%
  }
  .beta-tag {
    display: inline;
    font-size: 12px;
    color: white;
    background-color: #CC0000;
    padding: 2px 8px;
    border-radius: 10px;
    margin-left: 5px;
  }
  .link-logo {
    cursor: pointer;
  }
`;
