import React from "react";
import NearestDepartments from "./NearestDepartments";
import {connect} from "react-redux";
import {getTnD} from "../../Redux/reducers/NearestDepartment-reducer";
import {getNearestDepartmentResult} from "../../Redux/selectors/NearestDepartmentsSelector";
import {getIsFetching} from "../../Redux/selectors/commonSelector";


class NearestDepartmentsApI extends React.Component {

    // address_text_to_state = (event) => {
    //     this.props.textChange(event.target.value)
    // }
    // onAddressCheck = () => {
    //     this.props.getTND(this.props.address_text)
    // }
    onAddressCheck = (values) => {
        this.props.getTnD(values.address_text)
    }
    render() {
        return (
            <NearestDepartments result={this.props.result} isFetching={this.props.isFetching}
                                      // address_text={this.props.address_text}
                                      // address_text_to_state={this.address_text_to_state}
                                      onAddressCheck={this.onAddressCheck}/>)
    }
}
let mapDispatchToProps = (state) => {
    return {
        result: getNearestDepartmentResult(state),
        isFetching: getIsFetching(state)
        // address_text: state.TheNearestDepartmentsReducer.address_text
    }
}
export default connect (mapDispatchToProps, {getTnD}) (NearestDepartmentsApI)