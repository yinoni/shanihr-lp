import React, { useState, useEffect } from "react";
import '../style/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NBItemsProps{
    itemName: string,
    href: string
}

interface Props{
    items: any[]
}


const NBItem = ({itemName, href}: NBItemsProps) => {
    return <a href={href} className="navbar-item">{itemName}</a>;
}


const NavBar = ({items}: Props) => {
    const [navbarItems, toggleNavBarItems] = useState(false);
    let itemsComponents = items.map((item, key) => {
        return <NBItem key={key} itemName={item.itemName} href={item.href} />
    });

    const onMenuBtnClick = () => {
        toggleNavBarItems(!navbarItems);
    }

    return (
        <div className="navbar-container">
            <h1 className="logo">SHANI HR</h1>
            <button className="navbar-menu" onClick={onMenuBtnClick} >
                <FontAwesomeIcon icon={faBars} color="#002B5B" />
            </button>
            <div className={`navbar-items ${navbarItems ? "" : "hidden"}`}>
                {itemsComponents}
                <button className="transparent-bg contact-btn">!יצירת קשר</button>
            </div>
        </div>
    );
}

export default NavBar;