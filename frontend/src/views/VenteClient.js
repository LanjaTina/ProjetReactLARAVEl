import { useState, useEffect } from "react";
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

export default function VenteClient(){
    const[users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        axios.get('http://127.0.0.1:8000/api/tarif').then(res=>{
           setUsers(res.data);
        }) 
    }

     
    

    return(

    
        <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Les LISTES DE VOTRE COMMANDE</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                     <tr>
                         <th>Sno.</th>
                         <th>Secteur</th>
                         <th>Categorie</th>
                         
                     </tr>
                    
                 <tbody>
                     {users.map((user,index)=>(
                         <tr key={user.id}>
                         <td>{++index}</td>
                         <td>{user.name}</td>
                         <td>{user.categorie}</td>
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