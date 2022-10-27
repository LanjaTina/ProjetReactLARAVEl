import axios from "axios";
import { useState } from "react"
import addNotification from "react-push-notification";

export default function Create() {
    const [inputs, setInputs] = useState({});
    const [categorie, setCategorie] = useState('A')
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        inputs.categorie = categorie
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        addNotification({
            title: 'Formation',
            message: 'Demmande effectuer avec succes',
            duration:5000,
            native: true,
        });
        inputs.categorie = categorie
        console.log(inputs)
        axios.post('http://localhost:8000/api/user', inputs)
        .catch(err=>console.log(err))
    }
    return (
        <center>
        <div>
                   
    <div className="card-header">
                <div className="col-sm-13 justify-content-center">
                    <table>
                        <thead>
                            <tr>
                                <th> <label >Secteur</label> <br />
                                    <input type="text" name="name" className="from-control mb-2"
                                        value={inputs.name || ''}
                                        onChange={handleChange}
                                    />
                                </th> <br></br>
                                <th> <label>Categorie</label> <br />
                                <select onChange={e=>{setCategorie(e.target.value)}}>
                                    <option value={'A'}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'C'}>C</option>
                                    <option value={'D'}>D</option>
                                    <option value={'E'}>E</option>
                                </select>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>  <label>Taux horaires enseignant Min</label> <br />
                                    <input type="number" name="themin" className="from-control mb-2"
                                        value={inputs.themin || ''}
                                        onChange={handleChange}
                                    /> </th><br /><br />
                                <th>  <label>Taux horaires enseignant Max</label> <br />
                                    <input type="number" name="themax" className="from-control mb-2"
                                        value={inputs.themax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>  <label>Cout reel Horaire Min</label> <br />
                                    <input type="number" name="crhmin" className="from-control mb-2"
                                        value={inputs.crhmin || ''}
                                        onChange={handleChange}
                                    /> </th><br />
                                <th>   <label>Cout reel Horaire Max</label> <br />
                                    <input type="number" name="crhmax" className="from-control mb-2"
                                        value={inputs.crhmax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>  <label>Cout reel Journalier Min</label> <br />
                                    <input type="number" name="crjmin" className="from-control mb-2"
                                        value={inputs.crjmin || ''}
                                        onChange={handleChange}
                                    />
                                </th> <br></br>
                                <th>  <label>Cout reel Journalier Max</label> <br />
                                    <input type="number" name="crjmax" className="from-control mb-2"
                                        value={inputs.crjmax || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>  <label>Nombre de commission vendues</label> <br />
                                    <input type="number" name="nbr" className="from-control mb-2"
                                        value={inputs.nbr || ''}
                                        onChange={handleChange}
                                    />
                                </th>
                            </tr>
                            <tr>
                            <br></br>
                            <br></br>
                            <br></br>
                                <th> 
                                <br />
                                    <button type="button" onClick={submitForm} className="btn btn-info mt-6">Ajouter</button>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </center> 

    )
}
