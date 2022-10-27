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
import Catalogue from "./Catalogue";
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



function Tables() {
  const [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        axios.get('http://127.0.0.1:8000/api/user').then(res => {
            setUsers(res.data);
            console.log(res);
              setTimeout(() =>{
                setData(res.data);
                setIsLoading(false);
              },3000);
  
        })
    }

    const deleteUser = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/user/${id}`).then(res => {
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
                <div>
                  <center>
                  <h2>SYSTEME DE TARIFICATION DES MODULES</h2>
                  </center>
                </div>
                
                <CardTitle tag="h4"><center>LISTES DES FORMATIONS</center></CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                        <th>Sno.</th>
                        <th>Secteur</th>
                        <th>Categorie</th>
                        <th>Taux horaires enseignant Min</th>
                        <th>Taux horaires enseignant Max</th>
                        <th>Cout reel Horaire Min</th>
                        <th>Cout reel Horaire Max</th>
                        <th>Cout reel Journalier Min</th>
                        <th>Cout reel Journalier Max</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.categorie}</td>
                            <td>{user.themin}</td>
                            <td>{user.themax}</td>
                            <td>{user.crhmin}</td>
                            <td>{user.crhmax}</td>
                            <td>{user.crjmin}</td>
                            <td>{user.crjmax}</td>

                            <td>
                            <div className="but">
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + user.id }}>Modifier</Link>
                                </div>
                            </td>
                            <td>
                                <div> <button type="button" className="btn btn-danger"
                                    onClick={() => { deleteUser(user.id) }}
                                >Delete</button></div>
                            </td>
                        </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
            
          <Catalogue/>
          
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
