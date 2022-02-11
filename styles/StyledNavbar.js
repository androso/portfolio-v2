import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  background: #333;
 
  .navigation-container,
  .nav__burger-button {
    margin-right: 50px;
  }
  .navigation-links {
    margin-right: 10px;
    display: none;
  }
  .nav__burger-button {
    background: none;
    width: 30px;
    border: none;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .toggle-bar {
    height: 2px;
    background: white;
    display: flex;
    width: 100%;
    margin-bottom: 5px;
  }
    @media (min-width: 700px) {
    .nav__burger-button {
      /* display: none; */
    }
  }


`;



export default StyledNavbar;