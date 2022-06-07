import FoodMenu from "./FoodMenu";
import img1 from "../Vrstva10.jpg"
import img2 from "../Vrstva11.jpg"
import img3 from "../Vrstva12.jpg"
import img4 from "../Vrstva4.jpg"
import img5 from "../Vrstva5.jpg"
import img6 from "../Vrstva6.jpg"
import img7 from "../Vrstva7.jpg"
import img8 from "../Vrstva8.jpg"
import img9 from "../Vrstva9.jpg"
import OfferDailyMenu from "./OfferDailyMenu";
const dailymenucontrols = {"ids":
        [
            {"id":1,"image":img1,"title":"Spaghetti with fresh tomatoes and dressing","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","price":"12$"},
            {"id":2,"image":img2,"title":"Paella with white fish and vegetables","description":"Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.","price":"9$"},
            {"id":3,"image":img3,"title":"Shima from lamb","description":"sed do eiusmod tempor incididunt ut labore,sed do eiusmod tempor incididunt ut labore,sed do eiusmod tempor incididunt ut labore","price":"25$"},
        ]
};
const foodmenucontrols = {"ids":
        [
            {"id":1,"image":img4,"ing":"Raw meat with BBQ","price":"10","alg":"4,8,12"},
            {"id":2,"image":img5,"ing":"Fresh trout","price":"13","alg":"4,9"},
            {"id":3,"image":img6,"ing":"Mushroom soup","price":"9","alg":"1,3,11"},
            {"id":4,"image":img7,"ing":"Chicken with potatoes","price":"18","alg":"4,8,17"},
            {"id":5,"image":img8,"ing":"pasta with tomato puree","price":"12","alg":"2,6"},
            {"id":6,"image":img9,"ing":"salad with beetroot","price":"6","alg":"NONE"},
        ]
};
export default function DailyMenu(){
    return <div className="daily_menu" id="openinghours">
        <div className="daily_title">
            <h3>Daily Menu</h3>
        </div>
        <div className="food_menu">
            <div className="vegan_menu">
                <input type="checkbox" id="vegan1" name="vegan1" className="checkbox-round"/>
                    <label htmlFor="vegan1">show vegan menu only</label>
            </div>
            <FoodMenu ids={foodmenucontrols.ids}/>
        </div>
        <OfferDailyMenu ids={dailymenucontrols.ids} />
    </div>
}