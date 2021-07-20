import React from 'react';
import Card from './components/Card/Card';
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country/all',
  headers: {
    'x-rapidapi-key': '939f16deb5msh73ce3b20c56e8a8p18d292jsne14df2fe5abd',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

const covidStats = axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

class App extends React.Component {
  state = {
    covidStats: covidStats
  }

  componentDidMount() {

    console.log(covidStats);
    
  }
  render() {
    return (
      <div className="App">
        <h1 className="text-blue-600 text-xl">covid-19</h1>
        <Card 
          cardLabel="global" confirmedCases='0'
          recoveryCases='0' criticalCases='0' deaths='0'  />
      </div>
    );
  }
  
}

export default App;
