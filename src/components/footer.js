import site from "../img/globe-solid.svg";
import facebook from "../img/facebook-brands.svg";
import twitter from "../img/twitter-brands.svg";
import instagram from "../img/instagram-brands.svg";


function footer() {
    return (
        <footer className="footer">
            <h2 className="subtitle">Andrés Ixtepan</h2>
            <div className="container-reseau">
                <a href="https://andresixtepan.com/" target="_blank" rel="noreferrer" className="lien_reseau"><img src={site} alt="site_internet"className="reseau"/></a>
                <a href="https://www.facebook.com/andresixtepanhdz" target="_blank" rel="noreferrer" className="lien_reseau"><img src={facebook} alt="facebook" className="reseau"/></a>
                <a href="https://twitter.com/andresixtepan_" target="_blank" rel="noreferrer" className="lien_reseau"><img src={twitter} alt="twitter" className="reseau"/></a>
                <a href="https://www.instagram.com/andresixtepan_/" target="_blank" rel="noreferrer" className="lien_reseau"><img src={instagram} alt="instagram" className="reseau"/></a>
            </div>
            <div>
                <p>Codes by <a href="https://www.whatcannydev.com" target="_blank" rel="noreferrer" className="lien_reseau">WhatCannyDev</a>.</p>
                <p>All rights reserved &copy; 2022 <a href="https://www.whatcannydev.com" target="_blank" rel="noreferrer" className="lien_reseau">WhatCannyDev</a>.</p>
            </div>
        </footer>
    );
}

export default footer;