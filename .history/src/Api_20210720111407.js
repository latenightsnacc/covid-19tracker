import axios from 'axios'

// const covidStats = {
//     getData: () =>
//     axios({
//         'method':'GET',
//         'url':'https://example.com/query',
//         'headers': {
//             'content-type':'application/octet-stream',
//             'x-rapidapi-host':'example.com',
//             'x-rapidapi-key': process.env.RAPIDAPI_KEY
//         },
//         'params': {
//             'search':'parameter',
//         },
//     })
// }

const covidStats = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country/all',
  headers: {
    'x-rapidapi-key': '939f16deb5msh73ce3b20c56e8a8p18d292jsne14df2fe5abd',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

axios.request(covidStats).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default covidStats;