import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="cards">
          <div>
            Nome
            <br />
            <input data-testid="name-input" type="text" />
          </div>
          <div>
            Descrição
            <br />
            <input data-testid="description-input" type="textarea" />
          </div>
          <div>
            Attr01
            <input data-testid="attr1-input" type="number" />
            <br />
            Attr02
            <input data-testid="attr2-input" type="number" />
            <br />
            Attr03
            <input data-testid="attr3-input" type="number" />
          </div>
          <div>
            Imagem
            <input data-testid="image-input" type="text" />
          </div>
          <div>
            Raridade
            <br />
            <select data-testid="rare-input" type="select">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>
          <div>
            <input data-testid="trunfo-input" type="checkbox" />
            Super Trybe Trunfo
          </div>
          <div>
            <button data-testid="save-button" type="button">
              Salvar
            </button>
          </div>
        </label>
      </form>
    );
  }
}

export default Form;
