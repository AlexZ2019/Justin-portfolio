import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Tools/Forms/Forms";
import {required} from "../../Tools/Validators/Validators";
import Preloader from "../Common/Preloader/Preloader";
import s from "../Tracking/Tracking.module.css"

let TnDForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"address_text"} component={Input} validate={[required]} type="text" placeholder="Введіть найближчу адресу"/>
        </form>)
}
const TnDFormRedux = reduxForm({
    form: 'TnDForm'
})(TnDForm)

let NearestDepartments = ({result, onAddressCheck, isFetching}) => {
    if (isFetching)
        return (
            <Preloader/>)
    else
        return <div className="container-fluid">
            <div className={s["content"] + " row"}>
                <div className='col-12'>
                    <h3 className='pt-5'>Знайдіть найближче відділення для Вас</h3>
                    {/*<input onChange={props.address_text_to_state} value={props.address_text} type="text" className='mt-5 mr-3'/>*/}
                    {/*<button onClick={props.onAddressCheck}>*/}
                    {/*    Search*/}
                    {/*</button>*/}
                    <TnDFormRedux onSubmit={onAddressCheck}/>
                    {result ? <table className='col-12 mt-5 mb-5'>
                        <tr>
                            <th>
                                Номер відділення
                            </th>
                            <th>
                                Адреса
                            </th>
                            <th>
                                місто
                            </th>
                            <th>
                                тип
                            </th>
                        </tr>
                        {result.map(element => {
                            return <React.Fragment>
                                <tr>
                                    <td>
                                        {element.number}
                                    </td>
                                    <td>
                                        {element.adress}
                                    </td>
                                    <td>
                                        {element.locality}
                                    </td>
                                    <td>
                                        {element.type}
                                    </td>
                                </tr>
                            </React.Fragment>
                        })} </table> : <div className='mt-5'>
                        Введіть потрібну адресу
                    </div>}
                </div>
            </div>
        </div>
}

export default NearestDepartments
