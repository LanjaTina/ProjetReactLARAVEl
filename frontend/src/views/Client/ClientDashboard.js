
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="2">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="numbers">
                      <p className="card-category"><center>Administration</center></p>
                      <p className="card-category"><center>Réseaux</center></p>
                      <CardTitle tag="p"><center>Mettre en place un réseau étendu à haut débit</center></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>

              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="2">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="numbers">
                      <p className="card-category"><center>Administration</center></p>
                      <p className="card-category"><center>Réseaux</center></p>
                      <CardTitle tag="p"><center>Mettre en place un réseau étendu à haut débit</center></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>

              <CardFooter>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
            <CardBody>
                <Row>
                <Col md="2">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="9">
                  <div className="numbers">
                      <p className="card-category"><center>Administration</center></p>
                      <p className="card-category"><center>Réseaux</center></p>
                      <CardTitle tag="p"> <center>Optimiser la duré de vie et la qualité de votre réseau</center></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card><br/><br/><br/>
          </Col>
          <Col lg="3" md="6" sm="6">
          </Col>
          <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="2">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="numbers">
                      <p className="card-category"><center>Programamtion et</center></p>
                      <p className="card-category"><center> Développement</center></p>
                      <CardTitle><center>Anlayse des risques informatiques</center></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="2">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="numbers">
                      <p className="card-category"><center>Programamtion et</center></p>
                      <p className="card-category"><center> Développement</center></p>
                      <CardTitle><center>Connaître les langages de programmation Web et créer son propre site </center></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="2">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="numbers">
                      <p className="card-category"><center>Programamtion et</center></p>
                      <p className="card-category"><center> Développement</center></p>
                      <CardTitle><center>Tout savoir sur le système de gestions de base de données (SGBD) et apprendre le langage SQL</center></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card><br/><br/><br/>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="2">
                  <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="9">
                    <div className="numbers">
                      <p className="card-category"><center>GESTION DE PROJET</center></p>
                      <p className="card-category"><center> INFORMATIQUE</center></p>
                      <hr/>
                      <CardTitle><center>Tout savoir sur le système de gestions de base de données (SGBD) et apprendre le langage SQL</center></CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
        </Row>  
        <Row>
        </Row> 
        
      </div>
    </>
  );
}

export default Dashboard;
