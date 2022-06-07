import Slider from "react-slick";
export default function MainMenu(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <div className="wrap" id="pricelist">
        <div className="mainmenu">
            <div className="item">
                <div className="item_1">
                    <div className="item_inf_1">
                        <h2>For meat<br/>lovers</h2>
                        <button className="btn">
                            Full menu
                        </button>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item_2">
                    <div className="item_inf_2">
                        <h2>Vegetarian<br/>& vegan</h2>
                        <button className="btn">
                            Full menu
                        </button>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item_3">
                    <div className="item_inf_3">
                        <h2>See our<br/>secrets</h2>
                        <button className="btn">
                            Full menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Slider className="slider" {...settings}>
            <div className="item">
                <div className="item_1">
                    <div className="item_inf_1">
                        <h2>For meat<br/>lovers</h2>
                        <button className="btn">
                            Full menu
                        </button>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item_2">
                    <div className="item_inf_2">
                        <h2>Vegetarian<br/>& vegan</h2>
                        <button className="btn">
                            Full menu
                        </button>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item_3">
                    <div className="item_inf_3">
                        <h2>See our<br/>secrets</h2>
                        <button className="btn">
                            Full menu
                        </button>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
}