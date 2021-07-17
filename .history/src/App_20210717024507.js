import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <h1 className="text-blue-600 text-xl">covid-19</h1>
      <Card 
        cardLabel="global" confirmedCases='0'
        recoveryCases='0' criticalCases='0' deaths='0'  />
    </div>
  );
}

export default App;
