export default function FooterMenu(){
    return <div className="footer" id="#contacts">
        <div className="footer_container">
            <div className="footer_1">
                <div>
                    <h2>about us</h2>
                </div>
                <div>
                    <a>our story</a>
                </div>
                <div>
                    <a>suppliers</a>
                </div>
                <div>
                    <a>news & updates</a>
                </div>
                <div>
                    <a>franchise</a>
                </div>
            </div>
            <div className="footer_2">
                <div>
                    <h2>for you</h2>
                </div>
                <div>
                    <a>reviews</a>
                </div>
                <div>
                    <a>facebook</a>
                </div>
                <div>
                    <a>instagram</a>
                </div>
                <div>
                    <a>career</a>
                </div>
            </div>
            <div className="footer_3">
                <div>
                    <h2>useful links</h2>
                </div>
                <div>
                    <a>map of web</a>
                </div>
                <div>
                    <a>partners</a>
                </div>
                <div>
                    <a>mobile app</a>
                </div>
                <div>
                    <a>other</a>
                </div>
            </div>
            <div className="footer_4">
                <div>
                    <h2>sign up our newsletter</h2>
                </div>
                <div className="footer_4_mail">
                    <div>
                        <input className="mail" refs="email" type="text" size="23" placeholder="E-mail address"/>
                    </div>
                    <div className="footer_btn">
                        <button className="btn">
                            sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}