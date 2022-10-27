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
import Dashboard from "views/Dashboard.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Login from "views/Login";
import Agenda from "views/Agenda";
import Vente from "views/Vente";
import Planing from "views/Planing";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/agenda",
    name: "Agenda",
    icon: "far fa-calendar",
    component: Agenda,
    layout: "/admin"
  },
  {
    path: "/vente",
    name: "Commande List",
    icon: "nc-icon nc-bell-55",
    component: Vente,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/planing",
    name: "Planing",
    icon: "far fa-clock ",
    component: Planing,
    layout: "/admin"
  },
  
   {
    pro: true,
    path: "/Login",
    name: "Logout",
    icon: "nc-icon nc-diamond",
    component: Login,
    layout: "/admin"
  },
  
];
export default routes;
