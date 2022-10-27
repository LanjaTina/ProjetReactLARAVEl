import axios from "axios";
import { useState } from "react";
import {
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CRow,
  } from '@coreui/react';
import addNotification from "react-push-notification";

export default function CreateVente() {
   // const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [name, setName] = useState("Transversale")
    const [categorie, setCategorie] = useState("A")
    
    const submitForm = () => {
        addNotification({
            title: 'Commande',
            message: 'Demmande effectuer avec succes',
            duration:5000,
            native: true,
        });
        inputs.name = name
        inputs.categorie = categorie
        axios.post('http://127.0.0.1:8000/api/tarif', inputs).then((res) => {
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
                        <div>
                            <center>
                                    <h1>Faite votre commande</h1>
                                    <div className="col-sm-6 justify-content-center">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th> <label>Adresse Email/Nom</label> <br />
                                                        <input type="Email" name="client" className="from-control mb-2"
                                                            value={inputs.client || ''}
                                                            onChange={handleChange}
                                                        />
                                                    </th>
                                                    


                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                            <th> <label> Secteur </label> <br />
                                                        <select onChange={e => { setName(e.target.value) }} name="categorie" id="">
                                                            <option value="Transversale">Transversale</option>
                                                            <option value="Programmation">Programmation</option>
                                                            <option value="Administration systemes et réseaux">Administration systemes et réseaux</option>
                                                            <option value="Gestion de projets">Gestion de projets</option>
                                                            <option value="Sécurité">Sécurité</option>
                                                            <option value="Informatique décisionnelle/ Marketing Digital">Informatique décisionnelle/ Marketing Digital</option>
                                                        </select>
                                                    </th>

                                                    <tr>
                                                <th> <label> Categorie </label> <br />
                                                        <select onChange={e => { setCategorie(e.target.value) }} name="categorie" id="">
                                                            <option value="A">A</option>
                                                            <option value="B">B</option>
                                                            <option value="C">C</option>
                                                            <option value="D">D</option>
                                                        </select>
                                                    </th>
                                                </tr>



                                                <tr>
                                                    <th>
                                                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Acheter</button>
                                                    </th>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                    </center>
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