import React, { useState } from "react"
export default function FoodMenu({ids}){
    const [index] = useState(0);
    const id = ids[index];
    return (
        <div className="food_menu_items">
            {ids.map(id =>
                <div className="food_menu_item">
                    <div className="food_menu_img">
                        <img src={id.image} />
                    </div>
                    <div className="food_menu_inf">
                        <h3>
                            <span className="left-block"><span className='text-block overflow-ellipsis'>{id.ing}</span><span
                                className='dotsh'></span></span>
                            <span className="right-block">
                                {id.price} $
                            </span>
                        </h3>
                        <p>
                            <span className="left-block"><span className='text-block overflow-ellipsis'>Alergens</span><span
                                className='dotsp'></span></span>
                            <span className="right-block">
                                {id.alg}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}