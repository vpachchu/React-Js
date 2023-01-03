import { Component } from "react"

class Primary_Button extends Component {

    render() {
        return (
            <div className="primary-btn-container"  style={{color:'geen'}}>
                <a href="#" className="primary-btn btn">{this.props.name}</a>
            </div>
        )
    } 
}
export default Primary_Button;

