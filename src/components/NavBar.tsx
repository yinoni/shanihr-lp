import React, { useState, useEffect } from "react";
import '../style/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NBItemsProps{
    itemName: string,
    href: string,
    onBtnClick: () => void

}

interface Props{
    items: any[],
    onBtnClick: () => void
}


const NBItem = ({itemName, href, onBtnClick}: NBItemsProps) => {
    return <a href={href} onClick={onBtnClick} className="navbar-item">{itemName}</a>;
}


const NavBar = ({items, onBtnClick}: Props) => {
    const [navbarItems, toggleNavBarItems] = useState(false);
    

    const onMenuBtnClick = () => {
        toggleNavBarItems(!navbarItems);
    }

    const onNBItemClick = () => {
        onBtnClick();
        toggleNavBarItems(false);
    }

    let itemsComponents = items.map((item, key) => {
        return <NBItem onBtnClick={onNBItemClick} key={key} itemName={item.itemName} href={item.href} />
    });

    return (
        <div className="navbar-container">
            <h1 className="logo">SHANI HR</h1>
            <button className="navbar-menu" onClick={onMenuBtnClick} >
                <FontAwesomeIcon icon={faBars} color="#002B5B" />
            </button>
            <div className={`navbar-items ${navbarItems ? "" : "hidden"}`}>
                {itemsComponents}
                <button onClick={onNBItemClick} className="transparent-bg contact-btn">!יצירת קשר</button>
            </div>
        </div>
    );
}

export default NavBar;