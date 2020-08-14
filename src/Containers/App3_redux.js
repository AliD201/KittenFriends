import React, {useEffect} from 'react';
import CardList from '../Components/CardList'
// import {robots} from "../robots"
import SearchBox from '../Components/SearchBox'
import './App.css';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundry'
// redux
import { connect } from 'react-redux'
import {setsearchField, requestRobots} from './../Actions'

const mapStateToProps = (state) => {
  // console.log(state.searchField);
  return{
      searchField:state.searchRobots.searchField,
      robots : state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange: ( event ) => dispatch(setsearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}
// .............
// const len = robots.length;
// // console.log(len);
// for (var i=0; i<=len*200;i++){
//   var x = i*10;
//   robots.push({
//     id: 10,
//     name: x.toString(),
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   })
// }





const App = (props) =>{
  // const [Crobots, setRobots] = useState(robots);
  // THE CORRECT ONE DOWN OF THIS LINE
  // const [CsearchField, setSetSearchField] = useState('');
  // const [state, setState] = useState({Crobots:robots,CsearchField:''});
  // console.log(props.store.getState());
  // const onSearchChange = (event)=>{
  //   setSetSearchField( event.target.value);
  //   console.log(event.target.value);
  // }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    props.onRequestRobots();
  }, []);
  const robots = props.robots;
  const filtering = robots.filter(robot =>{
  return robot.name.toLowerCase().includes(props.searchField)
})
  // console.log(filtering);
  return (
    <div className="tc">
    <h1 className="f1">KITTENFRIENDS</h1>
    <SearchBox searchChange={props.onSearchChange} />
    <Scroll>
    <ErrorBoundary>
    < CardList robots={filtering}/>
    </ErrorBoundary>
    </Scroll>
    </div>
  )

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
