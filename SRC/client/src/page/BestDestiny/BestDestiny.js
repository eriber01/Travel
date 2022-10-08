import React from "react";

export const BestDestiny = () => {


    const handlerCircle = (e, actions, circle) => {
        e.preventDefault()

        if (actions) {
            e.target.classList.remove('rotateLeft')
            e.target.classList.add('rotateRight')
            if (circle === 1) {
                e.target.innerText = 'Los Mejores destinos las Mejores Aventuras'
            } else {
                e.target.innerText = 'Las Mejores Emociones'
                e.target.style.backgroundColor = 'white'
            }
            // rotateLeft
        } else {
            e.target.classList.add('rotateLeft')
            e.target.classList.remove('rotateRight')

            if (circle === 1) {
                e.target.innerText = 'Divertido y mas con Alguien'
            } else {
                e.target.innerText = 'Que lleves en el Corazon'
                e.target.style.backgroundColor = '#0f4c75'

            }
        }
    }

    return (
        <div className="best-destiny">
            <div className="title-best">
                <h1>Nuestros Mejores Destinos</h1>
            </div>
            <div style={{ backgroundColor: '#bbe1fa' }} className="container-best">

                <div className="photo-up"></div>

                <div className="text-container">

                    <div onMouseEnter={(e) => handlerCircle(e, true, 1)}
                        onMouseLeave={(e) => handlerCircle(e, false, 1)}
                        className="text-up" id="circle_up">
                        <p id="txt-up">Divertido y mas con Alguien</p>
                    </div>

                    <div
                        onMouseEnter={(e) => handlerCircle(e, true, 2)}
                        onMouseLeave={(e) => handlerCircle(e, false, 2)}
                        className="text-down" id="circle_down">
                        <p id="txt-down">Que lleves en el Corazon</p>
                    </div>

                </div>
                <div className="photo-down"></div>
            </div>
        </div>
    )
}