import React, { useState, useEffect } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import addNotification from 'react-push-notification';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CRow,
  } from '@coreui/react'

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})


export default function Planing() {




    const [inputs, setInputs] = useState({});
    // const [allEvents, setAllEvents ] = useState()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        addNotification({
            title: 'Planing',
            message: 'Votre demande a été effectuer avec success',
            duration:5000,
            native: true,
        });
        console.log(inputs)
        axios.post('http://127.0.0.1:8000/api/agenda', inputs).then((res) => {
        })
    }


    return (
        <center>
                    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
                        <CContainer>
                        <CRow className="justify-content-center">
                            <CCol md={8}>
                            <CCardGroup>
                                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                                <CCardBody className="text-center">
                                        <table>
                                            <thead>
                                                <th>
                                                    Ajouter un titre
                                                </th>

                                                <th>
                                                    Date du debut
                                                </th>

                                                <th>
                                                    Date de la fin
                                                </th>

                                                <th>

                                                </th>
                                            </thead>
                                            <tbody>
                                                <th>
                                                    <input type="text" placeholder="Add Title" style={{ width: "100%", marginRight: "10px" }}
                                                        name="name" value={inputs.name || ''} onChange={handleChange}
                                                    />
                                                </th>
                                                <td>
                                                    <input type="datetime-local" placeholder="Add Start" style={{ width: "100%", marginRight: "10px" }}
                                                    name="start" value={inputs.start || ''} onChange={handleChange}  
                                                    />
                                                </td>
                                                <td>
                                                <input type="datetime-local" placeholder="Add End" style={{ width: "100%", marginRight: "10px" }}
                                                    name="end" value={inputs.end || ''} onChange={handleChange}  
                                                    />
                                                </td>
                                                <td>
                                                    <CButton color="primary" className="mt-3" onClick={submitForm}
                                                        type="button"
                                                    >Ajouter un evenement</CButton>
                                                </td>
                                            </tbody>
                                        </table>
                                        </CCardBody>
                                        </CCard>
                                        </CCardGroup>
                                        </CCol>
                                        </CRow>
                                        </CContainer>
                                    </div>
                
    </center>
            
        
    )
}