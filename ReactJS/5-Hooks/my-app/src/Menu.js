import React from "react";


// function Menus(props) { // 1 - Componente inserido dentro de outro componente 
//     return (<ul className='menu'>
//       {props.links.map((link)  => <li>{link}</li>)}
//    </ul>)
// }
function Menus(props) { 
    const listLinks = props.links.map((link, index)  => <li key={index}>{link}</li>); // Coloque o funcao dentro de um variavel
    return (<ul className='menu'>
      {listLinks}
   </ul>)
}

export default Menus;