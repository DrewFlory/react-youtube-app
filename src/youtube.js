import React, {Component} from 'react';


class Youtube extends Component {
    render(){
        return(
            <div>
                <button>Get Videos</button>
                <div className="youtube">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OlTi0MVHMFc" 
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export default Youtube;