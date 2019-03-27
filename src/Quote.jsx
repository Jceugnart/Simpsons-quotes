import React from "react";

class Quote extends React.Component {
    render() {
        return(
            
            <div>
                <p>{this.props.quote}</p>
                <p>{this.props.character}</p>
                <img src={this.props.image} alt={this.props.character} />
              </div>
        );
    }
}

export default Quote;