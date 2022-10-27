import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
  } from "reactstrap";
  import addNotification from "react-push-notification";

export default function Vente(){
    const[users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        axios.get('http://127.0.0.1:8000/api/tarif').then(res=>{
           setUsers(res.data);
        }) 
    }

    const deleteUser = (id) => {
        addNotification({
            title: 'Commande',
            message: 'Demmande de client refusé',
            duration:5000,
            native: true,
        });
        axios.delete(`http://127.0.0.1:8000/api/tarif/${id}`).then(res=>{
           fetchAllUsers();
        }) 
    }

    return(

    
        <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Les Commandes</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                     <tr>
                         <th>Sno.</th>
                         <th>Client</th>
                         <th>Secteur</th>
                         <th>Categorie</th>
                         <th>Action</th>
                     </tr>
                    
                 <tbody>
                     {users.map((user,index)=>(
                         <tr key={user.id}>
                         <td>{++index}</td>
                         <td>{user.client}</td>
                         <td>{user.name}</td>
                         <td>{user.categorie}</td>
                         <td>
                            
                            <button type="button" className="btn btn-danger"
                                onClick={()=>{deleteUser(user.id)}}
                                >Refuser</button>
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

    )
}