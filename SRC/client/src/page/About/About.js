import React from "react";


export const About = () => {


    return (
        <div style={{ /* height: "100vh"  */ }} className="h-100 about-us" id="us">
            <h2 className="text-center mb-5 mt-5">About Us</h2>
            <div className="h-50 w-100 d-flex flex-column justify-content-center align-items-center">
                <div style={{width: '300px'}}>
                    <h4>Mission</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus iusto numquam enim delectus eum, accusamus sapiente repellat cum exercitationem eveniet veritatis accusantium, pariatur, nihil officia quaerat doloremque! Consequuntur, nulla?
                    </p>
                </div>

                <div className="d-flex flex-wrap justify-content-around mt-3 w-100">
                    <div style={{ width: '300px' }}>
                        <h4>Vision</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat. Corporis consequuntur nostrum animi optio voluptatem expedita tempora quidem repudiandae, assumenda aperiam nesciunt et fugit similique dignissimos accusamus culpa recusandae.
                        </p>
                    </div>

                    <div style={{ width: '300px' }}>
                        <h4>Values</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat. Corporis consequuntur nostrum animi optio voluptatem expedita tempora quidem repudiandae, assumenda aperiam nesciunt et fugit similique dignissimos accusamus culpa recusandae.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}