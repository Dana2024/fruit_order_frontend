import React from 'react';
import CountrySelect from './CountrySelect';
import axios from 'axios';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      country: "Cambodia",
    };
  }


  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('fruit', this.state.value);
    formData.append('country', this.state.country);

    try {
      const response = await axios.post('http://localhost:8000/submit_order/', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.message) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  
    alert(`Your favorite fruit is: ${this.state.value}. We will deliver it from ${this.state.country}.`);
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleCountryChange = (selectedCountry) => {
    this.setState({ country: selectedCountry });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the fruit you want to order:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <br />
        <CountrySelect
          countries={["Cambodia", "Australia", "US"]}
          selectedCountry={this.state.country}
          onCountryChange={this.handleCountryChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default OrderForm;
