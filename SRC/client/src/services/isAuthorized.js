import { config } from "../config";
import { useAuth0 } from "@auth0/auth0-react";
export const isAuthorized = (id) => {
    let authorized = false

    id === config.idAuthorized ? authorized = true : authorized = false

    return authorized
}