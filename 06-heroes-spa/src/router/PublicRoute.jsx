import { useContext } from "react"
import { AuthContext } from "../Auth"
import { Navigate } from "react-router"


export const PublicRoute = ({children}) => {

    const {logged} = useContext( AuthContext )

  return (!logged) 
  ? children
  : <Navigate to="/marvel" />
}
