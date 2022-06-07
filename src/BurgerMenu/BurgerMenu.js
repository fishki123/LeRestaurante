import React from 'react'
import './BurgerMenu.css'
export default function BurgerMenu({header, items,active,setActive}){
    return (
        <div className={active ? 'burger_menu active' : 'burger_menu'} onClick={() => setActive(false)}>
            <div className="burger_menu_content" onClick={e => e.stopPropagation()}>
                <div className="burger_menu_header">{header}</div>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}