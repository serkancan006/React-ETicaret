import React from "react";
import Footer from "../components/Layout/Footer/Footer"
import Header from "../components/Layout/Header/Header"
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default MainLayout

//eslint hata kaçınmak için proplara tip vermemiz gerekiyor.
MainLayout.propTypes = {
  children: Proptypes.node
};
