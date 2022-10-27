/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

function CatalogueClient() {

    const[users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        axios.get('http://127.0.0.1:8000/api/testlara').then(res=>{
           setUsers(res.data);
        }) 
    }

    const deleteUser = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/testlara/${id}`).then(res=>{
           fetchAllUsers();
        }) 
    }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">NOS FORMATIONS dISPONIBLE</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                  <th>Id.</th>
                         <th>Secteur</th>
                         <th>Categorie</th>
                         <th>Niveau de technicité exigé</th>
                         <th>Accompagnement nécessaire</th>
                         <th>Supports</th>
                         <th>Outils de formation</th>
                         <th>Logiciels de formation</th>
                         <th>Plateformes specifique</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((user,index)=>(
                         <tr key={user.id}>
                         <td>{++index}</td>
                         <td>{user.name}</td>
                         <td>{user.categorie}</td>
                         <td>{user.niveau}</td>
                         <td>{user.accompagnement}</td>
                         <td>{user.supports}</td>
                         <td>{user.outilsformation}</td>
                         <td>{user.logiciel}</td>
                         <td>{user.plateformes}</td>
                         <td>
                         
                            </td>
                     </tr>
                     ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CatalogueClient;
