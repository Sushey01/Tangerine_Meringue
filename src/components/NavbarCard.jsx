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
                <a href={item.link} className="main">
                  {item.label}
                </a>
                <div className="dropdown">
                  <ul>
                    {item.items.map((subItem, subIndex) => {
                      // Check if subItem has subItems (nested dropdown)
                      if (subItem.subItems) {
                        return (
                          <div className="second-dropdown" key={subIndex}>
                            <a href={subItem.link}>{subItem.label}</a>
                            <ul className="second-dropdown-hover">
                              {subItem.subItems.map((nestedItem, nestedIndex) => (
                                <li key={nestedIndex}>
                                  <a href={nestedItem.link}>
                                    {nestedItem.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      // Regular submenu item without further nesting
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

        // Single menu item (no dropdown)
        return (
          <div className="nav-hover" key={index}>
            <a
              href={item.link}
              className={item.label === "Home" ? "active main" : ""}
            >
              {item.label}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default NavbarCard;
