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

import LoginAdmin from "views/LoginAdmin";
import ClientDashboard from "views/Client/ClientDashboard";
import CreateVente from "views/CreateVente";
import CatalogueClient from "views/CatalogueClient";
import VenteClient from "views/VenteClient";
import Agenda from "views/Agenda";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/ClientDashboard",
    name: "ClientDashboard",
    icon: "nc-icon nc-bank",
    component: ClientDashboard,
    layout: "/client"
  },

  {
    path: "/CatalogueClient",
    name: "Formation disponible",
    icon: "nc-icon nc-tile-56",
    component: CatalogueClient,
    layout: "/client"
  },

  {
    path: "/CreateVente",
    name: "Votre Commande",
    icon: "fas fa-sync-alt",
    component: CreateVente,
    layout: "/client"
  },

  {
    path: "/VenteClient",
    name: "Liste de commande",
    icon: "far fa-clock",
    component: VenteClient,
    layout: "/client"
  },
  
  {
    path: "/agenda",
    name: "Emploie du temps",
    icon: "far fa-calendar",
    component: Agenda,
    layout: "/client"
  },
  {
    path: "/upgrade",
    name: "Validation",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/client"
  },

   {
    pro: true,
    path: "/LoginAdmin",
    name: "Admin mode",
    icon: "nc-icon nc-diamond",
    component: LoginAdmin,
    layout: "/client"
  },
];
export default routes;
