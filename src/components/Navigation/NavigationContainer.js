import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";
import {getTracking} from "../../Redux/reducers/Tracking-reducer";

class NavigationContainer extends React.Component {
    onParcelCheck = (values) => {
        this.props.getTracking(values.ttn_text)
    }
    render() {
        return (
        <Navigation onParcelCheck={this.onParcelCheck}/>)
    }
}

export default connect(null, {getTracking})(NavigationContainer)