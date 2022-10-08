import React from "react"
import { About } from "../About/About"
import { BestDestiny } from "../BestDestiny/BestDestiny"
import { BestOfferts } from "../BestOfferts/BestOfferts"
import { Contact } from "../Contact/Contact"
import { Footer } from "../Footer/Footer"
import { Header } from "../../components/Header/Header"

export const Home = () => {

    //className="up-btn"

    return (
        <div>
            <Header />
            <div className="home-page" id="home">
                <div className="video-container">
                    <video autoPlay muted loop src="videos/video-center.mp4" poster="videos/video-center-poster.jpg">
                    </video>
                </div>

                <div className="home-text">
                    <p className="text-center">Viaja como 'Quieras y a donde Quieras'</p>
                </div>
            </div>
            <div className="fixed-top top-50 me-2">
                <img className="float-end btn border-0" style={{ width: '70px', height: '60px' }} onClick={() => window.location.href = '#home'} id="up" alt="ir arriba" src="img/ico/up-arrow-2.png" />
            </div>
            <BestDestiny />
            <BestOfferts />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}