import React, { Component } from 'react';
import "./card.style.css"
class Card extends Component {
    render() {
        const {filterdMonsters} = this.props
        return (
            <div className='card-list'>
            {filterdMonsters.map((monster)=>{
                const {id,name} = monster
                  return( 
                    <div className='card-container' key={id}>
                  <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}}`}/>
                  <h1>{name}</h1>
                  </div>
                 )
              })}
              </div>
        )
            }
}

export default Card;