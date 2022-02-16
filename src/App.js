import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    this.setState((previous) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [...previous.cards, createdCard],
      onSaveButtonClick: this.saveCard,
    }));
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onSaveButtonClick={ this.saveCard }
          onInputChange={ this.handleInputChange }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
