import React, { Component } from 'react';
import './App.css';
import ListItem from './listItem/ListItem'

class App extends Component {
  
  constructor(){
    super()
    this.state={
      items: [],
      currentItem:{
        text: '',
        key: ''
      }
    }
  }

  onChangeHandler(e){
    this.setState({
      currentItem:{
          text: e.target.value,
          key: Date.now()
      }
    })
  }
  
  onSubmitHandler(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!=""){
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key){
    const filterItems = this.state.items.filter(item =>
      item.key!==key)
      this.setState({
        items: filterItems
      })
  }

  render() {
    
    return (
      <div className='App'>
        
        <header>
          <form id='to-do-from' onSubmit={this.onSubmitHandler.bind(this)}>
            <input type='text' placeholder='Enter text'
            value={this.state.currentItem.text}
            onChange={this.onChangeHandler.bind(this)}
            />
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItem items = {this.state.items}
        deleteItem = {this.deleteItem.bind(this)}
        >
        </ListItem>
      </div>
    );
  }
}

export default App;
