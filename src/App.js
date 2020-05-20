import React,{Component} from 'react';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list:[],
      };
    }
    componentDidMount() {
      this.hydrateStateWithLocalStorage();
      window.addEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
    }
    componentWillUnmount() {
      window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );

      this.saveStateToLocalStorage();
    }
    hydrateStateWithLocalStorage() {
      for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
  
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
    
            this.setState({ [key]: value });
          }
        }
      }
    }
    hydrateStateWithLocalStorage() {
      
      for (let key in this.state) {
       
        if (localStorage.hasOwnProperty(key)) {
         
          let value = localStorage.getItem(key);
  
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }
    saveStateToLocalStorage() {
      // for every item in React state
      for (let key in this.state) {
       
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
  
    updateInput(key, value) {

      this.setState({ [key]: value });
    }
  
    addItem() {

      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
   
      };
  
  
      const list = [...this.state.list];
  
      list.push(newItem);
  
      this.setState({
        list,
        newItem: ""
      });
    }
  
    deleteItem(id) {

      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
  
      this.setState({ list: updatedList });
    }
  
 
  render(){
    return (
      <div>

      <h1 className="app-title">TO DO LIST</h1>

        <div class="container2">
        <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
  
          <form id="to-do-form">
          <input
            type="text"
            placeholder="Escreva aqui"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
   
         
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i class="material-icons"> + </i>
          </button>
          </form>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <form id="itens-lista-form">
                  <li key={item.id}>
                  {item.value}
                    <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                      <i class="material-icons">x</i>
                    </button>
                </li>
                </form>
              );
            })}
          </ul>
        </div>
        </div>  
        
      </div>
      </div>
    );
  }
}  
  

export default App;
