//Importações Externas
import React from "react";
import { connect } from "react-redux";  

//Importações Internas 
import Hero from './Hero';
import NavBar from './NavBar'; 
import { changeTheme } from "../../Redux/Theme/ThemeActions";

function Header() { 
  return (
    <header>
      <NavBar/>
      <Hero/> 
    </header>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.Theme.darkMode,
});

export default connect(mapStateToProps, { changeTheme })(Header);
