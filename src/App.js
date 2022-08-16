import './App.css';
import { Component, useEffect, useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';


const App =()=>{
  const [searchSring,setSearchSring] = useState("")
   const [monsters,setMonsters] = useState([])
   const [filterdMonsters,setfilterdMonsters] = useState(monsters)
  console.log("render")
   useEffect(()=>{ fetch("https://jsonplaceholder.typicode.com/users")
   .then((res)=>{ return res.json()})
   .then((users)=>setMonsters(users))
  },[])
   
  useEffect(()=>{ 
    const filterdMonstersArray = monsters.filter((monster)=>{
      return  monster.name.toLocaleLowerCase().includes(searchSring)
}) 
       setfilterdMonsters(filterdMonstersArray)
 },[monsters,searchSring])
 

   
  const handleChange=(event)=>{
    const searchFeildSring = event.target.value.toLocaleLowerCase()
    setSearchSring(searchFeildSring)
}


  return(
     <div className="App">
      <h1  className="app-title">Monsters Profiles</h1>
      <SearchBox 
      className = "monsters-searchBox "
      placeholder ={"search the monsters"}
      handleChange={handleChange}/>
      <CardList filterdMonsters={filterdMonsters}/>
      </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       monsters:[],
//       searchInput:""
//     }
//   }

// componentDidMount() { 
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res)=>{ return res.json()})
//   .then((users)=>{this.setState(
//   ()=>{
//   return {monsters:users}
//   },
//   ()=>{
//   // console.log(this.state,"after setState")
//   })})
//  }

// handleChange=(event)=>{
// const searchSring = event.target.value.toLocaleLowerCase()
// this.setState(()=>{
//   return {searchInput:searchSring}
// })
// }
//   render(){
//     const {monsters,searchInput} = this.state
//     console.log("renderapp of app.js ")
//      const {handleChange} = this
//     const filterdMonsters = monsters.filter((monster)=>{
//       return  monster.name.toLocaleLowerCase().includes(searchInput)
//      })
     
//     return (
//       <div className="App">
//       <h1  className="app-title">Monsters Profiles</h1>
      // <SearchBox 
      // className = "monsters-searchBox "
      // placeholder ={"search the monsters"}
      // handleChange={handleChange}/>
//       <CardList filterdMonsters={filterdMonsters}/>
//       </div>
//     );
//   }
//   }
 

export default App;
