// import React, { Component } from 'react';
// import contacts from "./contacts";
// import ContactList from "./ContactList";

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       search: ""
      
//     }
//     this.changeHandler = this.changeHandler.bind(this)
//   }
//   changeHandler(event) {
//     this.setState({
//       search: event.target.value
//     })
//   }
//   render() {
    
//     let filteredCon = contacts.filter(contact => {
//       return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
//     })
//     const contactComponent = filteredCon.map((contact, index) => {
//       return <ContactList name={contact.name}
//                           key = {contact.id}
//                           phone={contact.phone} />
//     })
    
//     return (
//       <div>
//         <input type="search"
//                placeholder="Search" 
//                onChange={this.changeHandler} />
//         {contactComponent}
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import Card from "./Card";
import CardList from './CardList';
import robots from './robots';
import SearchBox from "./SearchBox";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      search: ""
    }
    this.onSearchchange = this.onSearchchange.bind(this)
  }
  onSearchchange = (event) => {
    this.setState({
      search: event.target.value
    })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchchange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

