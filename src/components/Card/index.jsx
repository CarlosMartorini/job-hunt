import { Component } from "react";
import './styles.css';

class Card extends Component {
    render() {
        return(
            <div className='card'>
                <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbCtpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--244fc62e8f513b51930d3aa66abe5f8b477a6e99/GTlogo-CMYK-large.jpg" alt='company-logo'/>
                <h3>Company Title</h3>
                <p>Cargo</p>
                <span>Remote in United States</span>
                <button>Get full details</button>
            </div>
        )
    }
}

export default Card;