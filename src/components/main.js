import collection from "../assets/pages.jsx";

function main() {

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    let page = "";

    let index_of_page = getRndInteger(0, 342);
    console.log("index du tableau : ",index_of_page);

    page = require("../img/"+collection[index_of_page]);
    console.log(page);

    return (
        <main className="main">
            <div className="page-container">
                <img src={page} alt="page_aleatoire" className="page"/>
            </div>
        </main>
    );
}

export default main;