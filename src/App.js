
import {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';

import { Searchbox } from './components/searchbox/searchbox.component';
import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//        this is me the mask man
//         </p>
       
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField:''
    }
  }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(users=>this.setState({monsters:users}))
   }
   
   handleChange=(e)=>{
    this.setState({searchField: e.target.value})
   }

render(){
  const { monsters , searchField } =this.state;
  const monsterFilterd =monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
      <div className='App'>
        {/* <input type="search" placeholder='search monsters' onChange={e=>console.log(e.target.value)}></input> */}
        {/* <input type="search" placeholder='search monsters' onChange={e=>this.setState({searchField: e.target.value})}></input> */}
        <h1>Cartoon Monsters </h1>
         <Searchbox
         placeholder='search monsters'
         handleChange={this.handleChange}
         Searchbox/>
        <CardList monsters ={monsterFilterd}></CardList>

         
      </div>
      
      );
}
}

export default App;
