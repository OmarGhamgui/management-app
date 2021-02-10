import ClientsList from '../Components/ClientsList'
import Profile from '../Components/Profile'
import Profilinfo from '../Components/Profilinfo'

 const routes = [
    {path:"/profile", component: Profile, name:"Profile", exact:'exact'},
    {path:"/profile/clients", component: ClientsList, name:"ClientsList"},
    {path:"/profile/info", component: Profilinfo,exact:'exact', name:"Info"}
]

export default routes