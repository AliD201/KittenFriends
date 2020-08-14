import React from 'react';
import Card from './Card'
// import Card from './AnimeCard'
// import Card from './AnimeCardSideWay'

const CardList = (props) => {
  //Error trigger
  // throw new Error('NOOOOO!')
  console.log(props);
  const robots = props.robots;
  const cardComponent = robots.map((user ,i) =>{
    // return (<Card key={i} id ={user.id} name={user.name} email={user.email}/>)
    return (<Card key={i} id ={user.id} name={user.name} email={user.email}/>)
  })


  return (
    <div>
    {cardComponent}
    </div>
  )
  // return (
  //   <div>
  //   <Card/>
  //   </div>
  // )

}

export default CardList
