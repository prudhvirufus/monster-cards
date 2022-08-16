// import React, { Component } from 'react';
import Card from './Card';
import "./cardList.style.css"


export const CardList = ({filterdMonsters}) => {
    return (<Card filterdMonsters={filterdMonsters}/>)
}


// class CardList extends Component {
//     render() {
//         const {filterdMonsters} = this.props
//         return (<Card filterdMonsters={filterdMonsters}/>
//         );
//     }
// }

export default CardList;