import { Component } from "react"

class Secondary_Button extends Component {

    render() {
        return (
            <div className="secondary-btn-container">
                <button className="secondary-btn btn">{this.props.name}</button>
            </div>
        )
    }
}
export default Secondary_Button;