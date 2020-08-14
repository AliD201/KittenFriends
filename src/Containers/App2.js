import React, {  useState }  from 'react';
import CardList from '../Components/CardList'
import {robots} from "../robots"
import SearchBox from '../Components/SearchBox'
import './App.css';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundry'

const len = robots.length;
console.log(len);
for (var i=0; i<=len*200;i++){
  var x = i*10;
  robots.push({
    id: 10,
    name: x.toString(),
    username: 'Bret',
    email: 'Sincere@april.biz'
  })
}

const App = () =>{
  // const [Crobots, setRobots] = useState(robots);
  const [CsearchField, setSetSearchField] = useState('');
  // const [state, setState] = useState({Crobots:robots,CsearchField:''});

  const onSearchChange = (event)=>{
    setSetSearchField( event.target.value);
    console.log(event.target.value);
  }
  const filtering = robots.filter(robot =>{
  return robot.name.toLowerCase().includes(CsearchField)
})
  console.log(filtering);
  return (
    <div className="tc">
    <h1 className="f1">KITTENFRIENDS</h1>
    <SearchBox searchChange={onSearchChange} />
    <Scroll>
    <ErrorBoundary>
    < CardList robots={filtering}/>
    </ErrorBoundary>
    </Scroll>
    </div>
  )

}

export default App;
