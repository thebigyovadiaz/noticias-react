import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

  categoriaRef = React.createRef();

  cambiarCategoria = (e) => {
    e.preventDefault();

    this.props.consultarNoicias(this.categoriaRef.current.value);
  }

  render() { 
    return (  
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={this.cambiarCategoria}>
            <h2>Noticias por Categoría</h2>
            <div className="input-field col s12 m8">
              <select ref={this.categoriaRef}>
                <option value="general" defaultValue>General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sport">Deportes</option>
                <option value="technology">Tecnología</option>
              </select>
            </div>
            <div className="input-field col s12 m4 enviar">
              <input type="submit" className="btn amber darken-2" value="Buscar" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = {
  consultarNoicias: PropTypes.func.isRequired
}
 
export default Formulario;
