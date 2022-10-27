import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'

const Login = () => {
  return (
    <center>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Gestion de formation</h2>
                      <p>
                        Vous etes l'Administrateur
                      </p>
                      <Link to="../auth/Wellcom " className="nav-link btn-rotate">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>
                          Deconnexion
                        </CButton>
                      </Link>
                    </div>
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

export default Login
