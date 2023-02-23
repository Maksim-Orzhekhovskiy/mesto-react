import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <body className="page">
        <Header/>
        <Main/>
        <Footer/>
        <template className="card-template">
          <div className="card">
            <img src="#" alt="#" className="card__image"/>
            <button type="button" className="card__delete" aria-label="Удалить"></button>
            <div className="card__wrapper">
              <h2 className="card__title"></h2>
              <div className="card__like-wrapper">
                <button type="button" className="card__like" aria-label="Мне нравится"></button>
                <p className="card__like-counter"></p>
              </div>
            </div>
          </div>
        </template>
      </body>
    </div>
  );
}

export default App;
