import {React, useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";



export default function Agenda() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
  fetchAllUsers();
}, []);

const fetchAllUsers = () => {
  axios.get('http://127.0.0.1:8000/api/agenda').then(res => {
    setUsers(res.data);
  })
}




const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})



  


  return (
  
  <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">LISTES DES FORMATIONS</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
            
                    
                          <Calendar 
                          localizer={localizer} 
                          events={users}
                          startAccessor="start" 
                          endAccessor="end" 
                          style={{height:700, margin: "50px" }} />
                          </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
  </>
    
  )
}