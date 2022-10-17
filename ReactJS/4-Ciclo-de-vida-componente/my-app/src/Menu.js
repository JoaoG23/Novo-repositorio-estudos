import React from "react";

function Menus(props) { 
    const listLinks = props.links.map((link, index)  => <li key={index}>{link}</li>); // Coloque o funcao dentro de um variavel
    return (<ul className='menu'>
      {listLinks}
   </ul>)
}

export default Menus;