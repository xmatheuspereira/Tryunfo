import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="cards">
          <div>
            Nome
            <br />
            <input
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
            />
          </div>
          <div>
            Descrição
            <br />
            <textarea
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              type="textarea"
            />
          </div>
          <div>
            Attr01
            <input
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
            />
            <br />
            Attr02
            <input
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
            />
            <br />
            Attr03
            <input
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
            />
          </div>
          <div>
            Imagem
            <input
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
            />
          </div>
          <div>
            Raridade
            <br />
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              type="select"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>
          <div>
            <input
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
            />
            Super Trybe Trunfo
          </div>
          <div>
            <button
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
              type="button"
            >
              Salvar
            </button>
          </div>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
