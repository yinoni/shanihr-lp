import React from "react";
import '../style/NavBar.css';

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

    let itemsComponents = items.map((item, key) => {
        return <NBItem key={key} itemName={item.itemName} href={item.href} />
    })

    return (
        <div className="navbar-container">
            <h1 className="logo">SHANI HR</h1>
            <div className="navbar-items">
                {itemsComponents}
                <button className="transparent-bg contact-btn">!יצירת קשר</button>
            </div>
        </div>
    );
}

export default NavBar;