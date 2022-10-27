import Login from "views/Login";
import Connexion from "views/Connexion";
import AdminConnexion from "views/AdminConnexion";
import Wellcom from "views/Wellcom";

var routeAuth = [
    {
        path: "/Connexion",
        name:"connexion",
        icon:"",
        component:Connexion,
        layout: "/auth"
    },
    {
        path: "/AdminConnexion",
        name:"adminconnexion",
        icon:"",
        component:AdminConnexion,
        layout: "/auth"
    },
    {
        path: "/Wellcom",
        name:"wellcom",
        icon:"",
        component:Wellcom,
        layout: "/auth"
    }


]
export default routeAuth;