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

function Wellcom ()  {
  
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-5" style={{width: '50%'}}>
                <CCardBody className='text-center'>
                <div style={{height: '55px'}}>
                    <h2>Admin</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="../auth/AdminConnexion">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Start
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary p-5" style={{ width: '50%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Client</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="../auth/Connexion">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Start
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
  )
}

export default Wellcom

