import React from "react";
import {connect} from "react-redux";
import Tracking from "./Tracking";
import {getTracking} from "../../Redux/reducers/Tracking-reducer";


class TrackingContainerAPI extends React.Component {

    componentDidMount() {
        console.log('render')
    }

    // ttn_text_to_state = (event) => {
    //     this.props.textChange(event.target.value)
    // }
    // onParcelCheck = () => {
    //     this.props.getTracking(this.props.ttn_text)
    // }
    onParcelCheck = (values) => {
        this.props.getTracking(values.ttn_text)
    }

    render() {
        return <Tracking
                         result={this.props.result}
                         isFetching={this.props.isFetching}
                         // ttn_text={this.props.ttn_text}
                         // ttn_text_to_state={this.ttn_text_to_state}
                         onParcelCheck={this.onParcelCheck}/>
    }
}

let mapStateToProps = (state) => {
    return {
        result: state.trackingReducer.result,
        isFetching: state.PreloaderReducer.isFetching
        // ttn_text: state.trackingReducer.ttn_text
    }
}

export default connect(mapStateToProps, {getTracking})(TrackingContainerAPI)