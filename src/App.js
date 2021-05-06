import { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

class App extends Component {

  state = {
    jobs: []
  }

  componentDidMount() {
    fetch('https://jobhunt-api.herokuapp.com/jobs')
    .then(response => response.json()
    .then(response) => this.setState({jobs: response}))
  }

  render() {
    const { jobs } = this.state;
      return (
        <div className="App">
        <Header/>
        <h2>🚀 Trending Jobs</h2>
        <div className='cardList'>
          {
            jobs.map(job => <Card job={job} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
