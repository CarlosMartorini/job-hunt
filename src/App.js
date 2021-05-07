import { Component } from 'react';
import './styles/App.css';
import Card from './components/Card';
import Header from './components/Header';

class App extends Component {

  state = {
    jobs: [], 
    loading: true
  }

  componentDidMount() {
    fetch('https://jobhunt-api.herokuapp.com/jobs') //?description=javascript
    .then((response) => response.json())
    .then((response) => this.setState({jobs: response, loading: false}));
  }

  render() {
    const { jobs, loading } = this.state;
      return (
        <div className="App">
        <Header/>
        <h2>🚀 Trending Jobs</h2>
        <div className='cardList'>
          {loading && <h3>Loading...</h3>}
          {
            jobs.map(job => <Card job={job} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
