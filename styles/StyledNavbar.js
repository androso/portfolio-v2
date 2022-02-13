import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  padding: 20px 0;
  justify-content: flex-end;
  align-items: center;  
  

  .container {
    display: flex;
  }
  button.toggle-container {
    display: none;
  }
  .nav-item {
    margin: 15px;
    color: var(--outstanding-shadow-text);
    transition: all .3s ease;
  }
  .nav-item:hover {
    color: var(--outstanding-text); 
    text-decoration: underline;
  }
  .nav-item[alt="Resumé"] {
    border: 2px solid var(--outstanding-text);
    padding: 8px 15px;
    border-radius: 5px;
    color: var(--outstanding-text)
  }
  .nav {
    margin-right: 50px;
  } 
  /* MOBILE STYLES */

  @media (max-width: 650px) {
    .container {
      margin-right: 20px;
    }
    button.toggle-container {
      display: flex;
      width: 35px;
      height: 25px;
      position: relative;
      transform: rotate(0deg);
      transition: all .5s ease-in-out;
      cursor: pointer;
      background: none;
      /* border: 1px solid red; */
      border: none;
    }
    button.toggle-container span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: var(--outstanding-text);
      border-radius: 9px;
      opacity: 1;
      left: 0; 
      transform: rotate(0deg);
      transition: all .25s ease-in-out;
    }

    button.toggle-container span:nth-child(1) {
      top: 0px;
    }

    button.toggle-container span:nth-child(2),
    button.toggle-container span:nth-child(3) {
      /* top: 14px; */
      top: 50%;
      transform: translateY(-50%);
    }
    button.toggle-container span:nth-child(4) {
      bottom: 0;  
    }
    button.toggle-container.open span:nth-child(1),
    button.toggle-container.open span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
    button.toggle-container.open span:nth-child(2) {
      transform: rotate(45deg);
    }
    button.toggle-container.open span:nth-child(3) {
      transform: rotate(-45deg);
    }
    button.toggle-container.open span:nth-child(4) {

    }
    .nav {
      display: none;
    }
  }

`;



export default StyledNavbar;