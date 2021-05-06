import { Component } from "react";
import './styles.css';

class Card extends Component {

    openLink = (link) => {
        window.open(link);
    }

    render() {
        const { job } = this.props;
        return(
            <div className='card'>
                <img src={job.company_logo ? job.company_logo : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'} alt='company-logo'/>
                <h3>{job.company.length > 15 ? `${job.company.substring(0, 15)}...` : job.company}</h3>
                <p>{job.title.length > 15 ? `${job.title.substring(0, 15)}...` : job.title}</p>
                <span>{job.location}</span>
                <button onClick={() => this.openLink(job.url)}>Get full details</button>
            </div>
        )
    }
}

export default Card;