import React, {Component} from 'react';

import Header from './views/header';
import Input from './views/input';
import List from './views/list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readList:[]
    }
  }

  render() {
    const {
      readList
    } = this.state;

    const leftCount = readList.filter((item) => !item.checked).length;

    return (
      <div>
        <Header name="John" leftCount={leftCount} />
        <Input autoFocus={true} />
        <List readList={readList} />
      </div>
    )
  }

  componentWillMount() {
    fetch('books.json')
    .then((data) => {
      return data.json();
    })
    .then((readList) => {
      this.setState({
        readList
      })
    })
  }
}

export default App;