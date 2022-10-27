import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

function loginBtn () 

{

    let email = document.getElementById("email_login").value;
    let password = document.getElementById("password_login").value;
  
    if (email === "lanjatiana@gmail.com" && password === "nfs payback") {
      window.location = "../admin/Dashboard";
    }
    else {
      alert("Your Email or password are incorrect!");
      
    }
  }

export default function AdminConnexion () {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              
            <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                <CForm>
                    <h1 className="col-sm-13 justify-content-center">Gestion des formations</h1>
                    <p className="text-medium-emphasis" >MR Admin, please enter your Email and password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      name="email"
                      type="email"
                      placeholder="Email"
                      id="email_login" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        id="password_login"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                      <CButton color="primary" className="mt-3" active tabIndex={-1}
                      type="button"
                      onClick={loginBtn}>
                          Connexion 
                        </CButton>                   
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard> 
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}


