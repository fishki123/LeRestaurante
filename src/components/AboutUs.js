export default function AboutUs(){
    return <div className="aboutus" id="aboutus">
        <div className="aboutus_menu">
            <div className="aboutus_content">
                <h1>Where to find us?</h1>
                <div className="aboutus_title">
                    <svg width="50px" height="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--ci-primary-color, currentColor)"
                              d="M464,344.063c0-109.308-84.755-199.193-192-207.39V80H240v56.673c-107.245,8.2-192,98.082-192,207.39V377.17H464Zm-32,1.107H80v-1.107c0-97.046,78.953-176,176-176s176,78.953,176,176Z"
                              className="ci-primary"/>
                        <rect width="480" height="32" x="16" y="416" fill="var(--ci-primary-color, currentColor)"
                              className="ci-primary"/>
                    </svg>
                    <a>LeRestaurante</a>
                    <div className="aboutus_descr">
                        <p>Hršpic 128<br/>
                            Pardubice, 530 01</p>
                    </div>
                </div>
                <div className="aboutus_btn">
                    <button className="btn">
                        show on a map
                    </button>
                </div>
            </div>
        </div>
    </div>
}