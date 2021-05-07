import { Component } from 'react';
import './styles/App.css';
import Card from './components/Card';
import Header from './components/Header';
import Filter from './components/Filter';
import Python from './assets/python-logo.png'
import Javascript from './assets/js-logo.png'
import React from './assets/react-logo.png'
import Angular from './assets/angular-logo.png'

class App extends Component {

  state = {
    jobs: [], 
    loading: true,
    url: 'https://jobhunt-api.herokuapp.com/jobs?description='
  }

  filterLanguage = (search) => {
    const { url } = this.state;
    this.setState({url: url + search});
    this.componentDidMount();
  }

  componentDidMount() {
    fetch(this.state.url) //?description=javascript
    .then((response) => response.json())
    .then((response) => this.setState({jobs: response, loading: false}));
  }



  render() {
    const { jobs, loading } = this.state;
      return (
        <div className="App">
        <Header/>
        <h2>🚀 Trending Jobs</h2>
        <Filter language={() => this.filterLanguage('python')} image={Python} alt={'python-logo'}/>
        <Filter language={() => this.filterLanguage('javascript')} image={Javascript} alt={'javascript-logo'}/>
        <Filter language={() => this.filterLanguage('react')} image={React} alt={'react-logo'}/>
        <Filter language={() => this.filterLanguage('angular')} image={Angular} alt={'angular-logo'}/>
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
