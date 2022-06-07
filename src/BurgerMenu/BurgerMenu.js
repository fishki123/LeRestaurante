import React from 'react'

const BurgerMenu = ({header, items}) => {
    return (
        <div className='burger_menu'>
            <div className='blur' />
            <div className='burger_menu_content'>
                <div className='burger_menu_header'>{header}</div>
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