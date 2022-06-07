import React, { useState } from "react"
export default function OfferDailyMenu({ids}) {
    const [index, setIndex] = useState(0);
    var rand_numbers;
    const next = () => {
        var randomNumber = Math.floor(Math.random() * (isNaN(rand_numbers) ? ids.length : ids.length - 1));
        if(!isNaN(rand_numbers) && randomNumber >= rand_numbers) randomNumber++;
        setIndex(randomNumber);
        rand_numbers = randomNumber;
        console.log("number is " + randomNumber);
    }
    const id = ids[index];
    return (
        <div className="online_menu_wrapper">
            <div className="online_menu">
                <div className="online_menu_img">
                    <div className="online_menu_img_content" style={{backgroundImage: `url(${id.image})`}}></div>
                </div>
                <div className="online_menu_inf">
                    <div className="online_menu_inf_content">
                        <div className="online_menu_txt">
                            <h4>Online menu</h4>
                        </div>
                        <div className="online_menu_title">
                            <h4>{id.title}</h4>
                        </div>
                        <div className="online_menu_description">
                            <p>
                                {id.description}
                            </p>
                        </div>
                        <div className="online_menu_btn">
                            <button className="btn">
                                {id.price} - order
                            </button>
                        </div>
                    </div>
                </div>
                <div className="online_menu_offer_btn">
                    <h3>next offer</h3>
                    <button onClick={next}> > </button>
                </div>
            </div>
        </div>
    )
}