import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';
import List from './views/list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  render() {
    const {bookList} = this.state;
    const todoCount = bookList.filter((item) => !item.checked).length;
    return (
      <div>
        <Header name="John" todoCount={todoCount} />
        <Input />
        <List bookList={bookList} />
      </div>
    );
  }

  componentDidMount() {
    fetch('books.json')
    .then((data)=>{
      return data.json();
    })
    .then((bookList)=>{
      this.setState({
        bookList
      });
    })
  }
}

export default App;