import React from "react";
import "./NavbarCard.css";



const NavbarCard = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item, index) => {
        if (item.type === "dropdown") {
          return (
            <li
              className="drop"
              key={index}
              style={{
                listStyle: "none",
                position: "relative",
                display: "inline-block",
              }}
            >
              <div className="nav-hover-other">
                <a href={item.link} className="main">{item.label}</a>
                <div className="dropdown">
                  <ul>
                    {item.items.map((subItem, subIndex) => {
                      if (subItem.subSubItems) {
                        return (
                          <div className="second-dropdown" key={subIndex}>
                            <a href={subItem.link}>{subItem.label}</a>
                            <ul className="second-dropdown-hover">
                              {subItem.subItems.map((nestedItem, nestedIndex) => (
                                <li key={nestedIndex}>
                                  <a href={nestedItem.link}>{nestedItem.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      return (
                        <div className="drop1" key={subIndex}>
                          <a href={subItem.link}>{subItem.label}</a>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        }

        return (
          <div className="nav-hover" key={index}>
            <a href={item.link} className={item.label === "Home" ? "active main" : ""}>
              {item.label}
            </a>
          </div>
        );
      })}
    </>
  );
};
// const NavbarCard = ({ menuItems }) => {
//   return (
//     <div  style={{display:"flex",justifyContent:"space-evenly",position:"relative" }}>
//       {menuItems.map((item,index) => 
//       (
//         <ul key={index}>
//          <li>
//         {item.label}
//        </li>
//        { item.items && 

// <ul style={{}}>

//  {item.items.map((subItem,subIndex) => (

//   <>
  
  
//     <div style={{width:"200px"}} key={subIndex} id={subIndex}>
//             {subItem.label}
//             </div>
//        { subItem.subItems && 
//   <ul>
//     {subItem.subItems.map((ssitem,ssindex) => (
//       <>
      
//       <li>{ssitem.label}</li>
//       {ssitem.subSubItems &&
//       <ul>
//  {ssitem.subSubItems.map((sssitem,sssindex) => (


//    <li>{sssitem.label}</li>
//  ))}
//       </ul>}
     

//     </>
//     ))}
//   </ul>}
  
//   </>
        
//         ))}

  
// </ul>}
       
          

        
//         </ul>
      

          
//       ))}
//     </div>
//   );
// };
export default NavbarCard;
