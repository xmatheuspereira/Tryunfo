import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    onSaveButtonClick: this.saveCard,
    cards: [],
    hasTrunfo: false,
    searchByName: '',
    searchByRarity: '',
    searchByTrunfo: false,
  };

  // Ref. https://pt-br.reactjs.org/docs/forms.html
  // Desestruturando o event. ({ target }) é o mesmo que event.target
  handleInputChange = ({ target }) => {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const validation = this.validateSaveButton();

    this.setState({
      [id]: value,
      isSaveButtonDisabled: validation,
    });
  }

  // Ref. https://github.com/tryber/sd-018-a-project-tryunfo/pull/11/commits/9f621fa9185ffdfcc60ee4f8c1851bb09dcc9e42
  validateSaveButton = () => {
    const arr = [];
    const attr1 = Number(cardAttr1.value);
    const attr2 = Number(cardAttr2.value);
    const attr3 = Number(cardAttr3.value);
    // maxValue = Soma total dos atributos e maxValue 2 = Limite máximo pra cada atributo.
    const maxValue = 210;
    const maxValue2 = 90;

    if (cardName.value === ''
    || cardDescription.value === ''
    || cardImage.value === '') {
      arr.push(false);
    } else arr.push(true);

    if (attr1 >= 0 && attr2 >= 0 && attr3 >= 0) {
      arr.push(true);
    } else arr.push(false);

    if (attr1 <= maxValue2 && attr2 <= maxValue2 && attr3 <= maxValue2) {
      arr.push(true);
    } else arr.push(false);

    if (attr1 + attr2 + attr3 <= maxValue) {
      arr.push(true);
    } else arr.push(false);

    return arr.some((element) => element === false);
  }

  saveCard = () => {
    const createdCard = { ...this.state };
    const { cardTrunfo } = createdCard;

    this.setState((previousState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [...previousState.cards, createdCard],
      onSaveButtonClick: this.saveCard,
      hasTrunfo: false,
      searchByName: '',
      searchByRarity: '',
      searchByTrunfo: '',
    }));

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true });
    }
  }

  // Ref. https://cursos.alura.com.br/forum/topico-erro-ao-tentar-remover-item-da-tabela-117732
  removeCard = (index) => {
    const { cards } = this.state;

    this.setState({
      cards: cards.filter((card) => (card !== index)),
    });

    if (index.cardTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const { cards, searchByName } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onSaveButtonClick={ this.saveCard }
          onInputChange={ this.handleInputChange }
        />
        <h2>Pré-visualização</h2>
        <Card { ...this.state } />
        <h2>Todas as Cartas</h2>
        <div>
          {
            cards.filter((search) => search.cardName.includes(searchByName))
              .map((card) => (
                <div key={ card.cardName }>
                  <Card { ...card } />
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={ () => this.removeCard(card) }
                  >
                    Excluir
                  </button>
                </div>
              ))
          }
          <Filter onInputChange={ this.handleInputChange } />
        </div>
      </div>

    );
  }
}

export default App;
