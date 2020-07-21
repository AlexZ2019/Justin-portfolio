import React from "react";
import {connect} from "react-redux";
import Tracking from "./Tracking";
import {getTracking} from "../../Redux/reducers/Tracking-reducer";
import {trackingResult} from "../../Redux/selectors/TrackingSelector";
import {getIsFetching} from "../../Redux/selectors/commonSelector";


class TrackingContainerApI extends React.Component {

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
        return (
            <Tracking
            result={this.props.result}
            isFetching={this.props.isFetching}
            // ttn_text={this.props.ttn_text}
            // ttn_text_to_state={this.ttn_text_to_state}
            onParcelCheck={this.onParcelCheck}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        result: trackingResult(state),
        isFetching: getIsFetching(state)
        // ttn_text: state.trackingReducer.ttn_text
    }
}

export default connect(mapStateToProps, {getTracking})(TrackingContainerApI)