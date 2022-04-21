import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      {/* <h1 style={{ headingStyle }}>{props.title}</h1> */}
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
//podemos definir default props por si no se definen al crear el componente
Header.defaultProps = {
  title: "Task Traker",
};
//para usarlo hay que añadir la libreria de propTypes porque ahora viene por separado y se debe incluir manualment si se quiere usar
Header.propTypes = {
  title: propTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header;
