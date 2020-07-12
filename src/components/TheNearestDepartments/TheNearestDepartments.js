import React from "react";
import s from './TheNearestDepartment.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Tools/Forms/Forms";
import {required} from "../../Tools/Validators/Validators";
import Preloader from "../Common/Preloader";

const TNDForm = ({handleSubmit, ...props}) => {
    return <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="offset-5">
                <Field name={'address_text'} component={Input} validate={[required]} type="text" className='mt-5 mr-3'/>
            </div>
            <div>
                <button className='mt-5'>
                    Search
                </button>
            </div>
        </div>
    </form>
}
const TNDFormRedux = reduxForm({
    form: 'TNDForm'
})(TNDForm)

let TheNearestDepartments = ({result, onAddressCheck, isFetching}) => {
    if (isFetching) return <Preloader />
    return <div className='container-fluid'>
        <div className={`row ${s.tnd}`}>
            <div className='col-md-12'>
                <h4 className='mt-5'>Знайдіть найближче відділення для Вас</h4>
                {/*<input onChange={props.address_text_to_state} value={props.address_text} type="text" className='mt-5 mr-3'/>*/}
                {/*<button onClick={props.onAddressCheck}>*/}
                {/*    Search*/}
                {/*</button>*/}
                <TNDFormRedux onSubmit={onAddressCheck}/>
                {result ? <table className='col-md-12 mt-5 mb-5'>
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
                        return <>
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
                        </>
                    })} </table> : <div className='mt-3'>
                    Введіть потрібну адресу
                </div>}
            </div>
        </div>
    </div>
}

export default TheNearestDepartments
