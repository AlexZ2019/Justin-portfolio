import React from "react";
import TheNearestDepartments from "./TheNearestDepartments";
import {connect} from "react-redux";
import {getTND} from "../../Redux/reducers/TheNearestDepartment-reducer";


class TheNearestDepartmentsAPI extends React.Component {
    componentDidMount() {
        console.log('render')
    }
    // address_text_to_state = (event) => {
    //     this.props.textChange(event.target.value)
    // }
    // onAddressCheck = () => {
    //     this.props.getTND(this.props.address_text)
    // }
    onAddressCheck = (values) => {
        this.props.getTND(values.address_text)
    }
    render() {
        return <TheNearestDepartments result={this.props.result}
                                      isFetching={this.props.isFetching}
                                      // address_text={this.props.address_text}
                                      // address_text_to_state={this.address_text_to_state}
                                      onAddressCheck={this.onAddressCheck}
        />
    }
}
let mapDispatchToProps = (state) => {
    return {
        result: state.TheNearestDepartmentsReducer.result,
        isFetching: state.PreloaderReducer.isFetching
        // address_text: state.TheNearestDepartmentsReducer.address_text
    }
}
export default connect (mapDispatchToProps, {getTND}) (TheNearestDepartmentsAPI)