import { Component } from "react";
import './styles.css'

class Filter extends Component {
    render() {
        const { language, image, alt } = this.props;
        return(
            <img className='button-filter' onClick={language} src={image} alt={alt}></img>
        )
    }
}

export default Filter;