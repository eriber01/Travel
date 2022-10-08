import React from "react";
// import './cmsStyle.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import { EditOrDelete } from "../../components/EditOrDelete/editOrDelete";
import { AuthNav } from "../../components/AuthNav/AuthNav";
import { Create } from "../../components/Create/Create";
import { useAuth0 } from "@auth0/auth0-react";
import { IsAuthenticate } from "../../components/IsAuthenticate/IsAuthenticate";
import { Loading } from "../../components/Loading/Loading";
import { isAuthorized } from "../../services/isAuthorized"
// import Sonnet from '../../components/Sonnet';

export const ManejadorCMS = () => {

    const { isAuthenticated, user, isLoading } = useAuth0()

    console.log(user?.sub);
    console.log(isAuthorized(user?.sub));

    return (

        <div>
            {
                isLoading ?
                    <Loading />
                    :
                    !isAuthenticated || !isAuthorized(user?.sub) ?
                        <IsAuthenticate />
                        :
                        <div>
                            <AuthNav />
                            <Tabs
                                defaultActiveKey="home"
                                id="fill-tab-example"
                                className="mb-3"
                                fill
                            >
                                <Tab className="vh-100" eventKey="home" title="Inicio" /* disabled */>
                                    <div style={{ height: '90vh' }} className="d-flex flex-column justify-content-center align-items-center">
                                        <h1>Bievenido al CMS</h1>
                                        <h3>Elila la operacion a realizar</h3>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Crear">
                                    <Create />
                                </Tab>
                                <Tab eventKey="contact" title="Editar">
                                    <EditOrDelete />
                                </Tab>
                            </Tabs>

                        </div>
            }
        </div>
    )
}