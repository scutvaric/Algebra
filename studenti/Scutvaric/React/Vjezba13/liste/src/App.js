import React from 'react';
import { UserFunction, UserChildren, UserClass } from './user/index';

class App extends React.Component {

  // constructor() {
  //   super();
    
  //   this.state = {
  //   users:  [{name: "Ivan", years: 30}, {name: "Marko", years: 35}, {name: "Ana", years: 25}],
  //   childrenText: "A hobi mi je plivanje."
  // };
  // }

  state = {
    users: [
      {id: '1', name: 'Ivan', years: 30},
      {id: '2', name: 'Marko', years: 35},
      {id: '3', name: 'Ana', years: 25}
    ],
    childrenText: "A hobi mi je skijanje"
  };

  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return {...user, years: user.years+1};
    });
    this.setState({users: newUsers});
  }

  // btnClickHandler1 = () => {
  //   const newUsers = this.state.users.map((user) => {
  //     return {...user, years: user.years+1};
  //   });
  //   this.setState({users: newUsers});
  // }

  nameChangeHandler = (event, index) => {

    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({users: newUsers})
  }

  render() {

    const { users } = this.state;

    const novaLista = users.map((usr,index) => 
      <li key={usr.id}><UserFunction name={usr.name} years={usr.years} onNameChange={(event)=>this.nameChangeHandler(event,index)}/></li>
      )

    return(
      <>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        {/* <ul>
          {users.map((usr,index) => 
          <li key={usr.id}><UserFunction name={usr.name} years={usr.years} onNameChange={(event)=>this.nameChangeHandler(event,index)}/></li>
          )}
        </ul> */}
        <ul>
          {novaLista}
        </ul>
        <UserFunction name={this.state.users[0].name} years={this.state.users[0].years} onNameChange={(event)=> this.nameChangeHandler(event,0)} />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{this.state.childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
        {/* <button onClick={this.btnClickHandler1.bind(this)}>Promjena godina1</button> */}
      </>
    );
  }
}

export default App;