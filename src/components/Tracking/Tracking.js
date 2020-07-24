import React from "react";
import s from "./Tracking.module.css"
import {Field, reduxForm} from 'redux-form'
import {minLengthCreator, required} from "../../Tools/Validators/Validators";
import {Input} from "../../Tools/Forms/Forms";
import Preloader from "../Common/Preloader/Preloader";

const minLength9 = minLengthCreator(9)
let TrackingForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'ttn_text'} component={Input} type="text"
                   validate={[required, minLength9]} placeholder="Введіть номер посилки"/>
        </form>)
}
const TrackingFormRedux = reduxForm({
    form: 'tracking'
})(TrackingForm)

let Tracking = ({result, onParcelCheck, isFetching}) => {
    if (isFetching)
        return (
            <Preloader/>)
    else
        return <div className='container-fluid'>
            <div className={s["content"] + " row"}>
                <div className="col-12">
                    <h3 className="pt-5">Трекер посилки</h3>
                    {/*<input className="mt-5 mr-2" onChange={props.ttn_text_to_state} value={props.ttn_text} type="text"/>*/}
                    {/*<button className="mt-5" onClick={props.onParcelCheck}>*/}
                    {/*    Get status*/}
                    {/*</button>*/}
                    <TrackingFormRedux onSubmit={onParcelCheck}/>
                    {result.orderNumber ? <div className="mt-4">
                        <h4>Номер відправлення: {result.orderNumber}</h4>
                        <p>{result.orderDescription}</p>
                        <p><b>Статус:</b> {result.status}</p>
                        <p><b>Дата:</b> {result.date}</p>
                        <p>Дякуємо, що скористались</p>
                    </div> : <div className="mt-5">{result}</div>}
                </div>
            </div>
        </div>
}
export default Tracking;