import avatar from "../img/0_andresix.jpg";

function header() {
    return (
        <header className="header">
            <img src={avatar} alt="avatar" className="avatar"/>
            <h1 className="title">Au hasard d'une page<br/> <a href="https://andresixtepan.com/" target="_blank" rel="noreferrer" className="artist">Andrés Ixtepan</a></h1>
        </header>
    );
}

export default header;