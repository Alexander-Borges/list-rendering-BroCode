import List from "./List.jsx"

function App() {


  const mlbTeams =   [{id: 1, name: "dodgers", inception: 1883}, 
  {id: 2, name: "yankees", inception: 1901}, 
  {id: 3, name: "giants", inception: 1883}, 
  {id: 4, name: "mets",  inception: 1962},
  {id: 5, name: "angels", inception: 1961}];

  const nflTeams =   [{id: 1, name: "chargers", inception: 1959}, 
  {id: 2, name: "raiders", inception: 1960}, 
  {id: 3, name: "rams", inception: 1937}, 
  {id: 4, name: "giants",  inception: 1925},
  {id: 5, name: "jets", inception: 1959}];

  

  return (<>
            <List items={mlbTeams} category="MLB Teams"></List>
            <List items={nflTeams}category="NFl Teams"></List>
 
           </>);
  
}

export default App
