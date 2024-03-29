import React from "react";
import axios from "axios";
import { useState } from "react";
import addNotification from "react-push-notification";

// components

export default function CreateCatalogue() {
    // const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const [name, setName ] = useState("Transversale") 
    const [categorie, setCategorie] = useState("A");
    const [niveau, setNiveau] = useState("Bas");
    const [accompagnement, setAccompagnement] = useState("Bassique");
    const [supports, setSupports] = useState("Numeriques");
    const [outilsformation, setOutilsformation] = useState("PC");
    const [logiciel, setLogiciel] = useState("Libres");
    const [plateformes, setPlateformes] = useState("Non");
    const submitForm = () => {
        addNotification({
            title: 'Catalogue',
            message: 'Demmande effectuer avec succes',
            duration:5000,
            native: true,
        });
        inputs.name = name 
        inputs.categorie = categorie
        inputs.niveau = niveau
        inputs.accompagnement = accompagnement
        inputs.supports = supports
        inputs.outilsformation = outilsformation
        inputs.logiciel = logiciel
        inputs.plateformes = plateformes
        console.log(inputs)
        axios.post('http://localhost:8000/api/testlara', inputs).then((res) => {
            //   navigate('/catalogue');
        })
    }
    return (
        <center>
            <div className="card-header">
                <div className="col-sm-13 justify-content-center">
                    
                        <table>
                            <thead>
                                <tr>
                                    <th> <label>Secteur</label> <br />
                                    <select onChange={e => { setName(e.target.value) }} name="name" id="">
                                            <option value ="Transversale">Transversale</option>
                                            <option value ="Programmation">Programmation</option>
                                            <option value ="Administration système et réseaux">Administration système et réseaux</option>
                                            <option value ="Gestion de projets">Gestion de projets</option>
                                            <option value ="Sécurité">Sécurité</option>
                                            <option value ="Informatique déscisionelle/Marketing Digital">Informatique déscisionelle/Marketing Digital</option>
                                        </select>
                                    </th>
                                    <th> <label> Categorie </label> <br />
                                        <select onChange={e => { setCategorie(e.target.value) }} name="categorie" id="">
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>  <label> Niveau de technicité exigé</label> <br />
                                        <select onChange={e => { setNiveau(e.target.value) }} name="niveau" id="">
                                            <option value="Bas">Bas</option>
                                            <option value="Moyen">Moyen</option>
                                            <option value="Haut">Haut</option>
                                        </select>
                                    </th>
                                    <th>  <label>Accompagnement nécessaire</label> <br />
                                        <select onChange={e => { setAccompagnement(e.target.value) }} name="accompagnement" id="">
                                            <option value="Basique">Basique</option>
                                            <option value="Moyen">Moyen</option>
                                            <option value="Poussé">Poussé</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <th>  <label>Supports</label> <br />
                                        <select onChange={e => { setSupports(e.target.value) }} name="supports" id="">
                                            <option value="Numeriques">Numeriques</option>
                                            <option value="Physiques">Physiques</option>
                                        </select>
                                    </th>
                                    <th>   <label>Outils de formation</label> <br />
                                        <select onChange={e => { setOutilsformation(e.target.value) }} name="outilsformation" id="">
                                            <option value="PC">PC</option>
                                            <option value="PC et Connexion">PC et Connexion</option>
                                            <option value="Neant">Neant</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                    <th>  <label>Logiciels de formation</label> <br />
                                        <select onChange={e => { setLogiciel(e.target.value) }} name="logiciel" id="">
                                            <option value="Libres">Libres</option>
                                            <option value="Payants">Payants</option>
                                            <option value="Neant">Neant</option>
                                        </select>
                                    </th>
                                    <th>  <label>Plateformes specifique</label> <br />
                                        <select onChange={e => { setPlateformes(e.target.value) }} name="plateformes" id="">
                                            <option value="Non">Non</option>
                                            <option value="Oui">Oui</option>
                                        </select>
                                    </th>
                                </tr>
                                <tr>
                                
                                
                                    <th> <br />
                                        <button type="button" onClick={submitForm} className="btn btn-info mt-6">Ajouter</button> 
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    
                </div>
            </div>
            </center>
    );
}
