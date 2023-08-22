import React from 'react';

class CountrySelect extends React.Component {
  render() {
    return (
      <label>
        Choose the country:
        <select value={this.props.selectedCountry} onChange={(e) => this.props.onCountryChange(e.target.value)}>
          {this.props.countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default CountrySelect;
