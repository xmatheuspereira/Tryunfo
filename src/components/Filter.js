import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      searchByName,
      searchByRarity,
      searchByTrunfo,
      onInputChange,
    } = this.props;

    return (
      <div>
        <h4>Filtros de busca</h4>
        <input
          id="searchByName"
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          value={ searchByName }
          onChange={ onInputChange }
        />
        <br />
        <select
          id="searchByRarity"
          data-testid="rare-filter"
          value={ searchByRarity }
          onChange={ onInputChange }
        >
          <option disabled selected value="">Raridade</option>
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <br />
        <input
          id="searchByTrunfo"
          checked={ searchByTrunfo }
          onChange={ onInputChange }
          type="checkbox"
          data-testid="trunfo-filter"
        />
        Super Trybe Trunfo
      </div>
    );
  }
}

Filter.propTypes = {
  searchByName: PropTypes.string.isRequired,
  searchByRarity: PropTypes.string.isRequired,
  searchByTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
