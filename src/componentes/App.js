import React, { Component } from 'react';
import Header from './Header';
import Noticias from './Noticias';
import Formulario from './Formulario';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoicias();
  }

  consultarNoicias = (categoria='general') => {

    let url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=90bbc7f64eeb41249cf5b557c15ba0e3`;

    fetch(url)
      .then(res => res.json())
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header titulo="Noticias React API" />

        <div className="container white contenedor-noticias">
          <Formulario consultarNoicias={this.consultarNoicias} />
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
