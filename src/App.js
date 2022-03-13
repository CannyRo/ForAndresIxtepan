
import './sass/App.scss';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
