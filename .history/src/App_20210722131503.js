import React from 'react';
import Card from './components/Card/Card';
import axios from "axios";

const url = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php';
const headers = {
  'x-rapidapi-key': '939f16deb5msh73ce3b20c56e8a8p18d292jsne14df2fe5abd',
  'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com'
}
function App () {
  const [stats, setStats] = React.useState(null);

  React.useEffect( () => {
    axios.get(url, {headers}).then((response) => {
      setStats(response.data);
    })
  })

  
 console.log(stats);

  return (
    <div className="App">
      <h1 className="text-blue-600 text-xl">covid-19</h1>
      <Card 
        cardLabel="global" confirmedCases='0'
        recoveryCases='0' criticalCases='0' deaths='0'  />
    </div>
  );
  
};

export default App;
