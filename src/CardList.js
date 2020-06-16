import React from 'react';
// import robots from "./robots";
import Card from './Card';

function CardList({robots}) {
  const cardComponents = robots.map((robot, i) => {
    return <Card name={robots[i].name} 
                  id={robots[i].id}
                  email={robots[i].email}
                  username={robots[i].username}
                  key={robots[i].id} />
  })
  return(
    <div>
      {cardComponents} 
    </div>
  )
}

export default CardList;