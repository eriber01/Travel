import React from "react";

export const Create = () => {

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">

            <div className="border rounded p-2 mb-5" style={{ width: '400px', height: '600px' }}>
                <div className=" d-flex justify-content-center align-items-center">
                    <form action="">
                        <div className="d-flex flex-column mb-2 mt-2">
                            <label className="mb-2" htmlFor="destino">Destino</label>
                            <input className="form-control" type="text" name="destino" />
                        </div>
                        <div className="d-flex flex-column">
                            <label className="mb-2" htmlFor="descripcion">Descripcion</label>
                            <textarea className="form-control" name="descripcion" id="" cols="20" rows="5"></textarea>
                        </div>
                        <div className="d-flex flex-column mb-2">
                            <label className="mb-2" htmlFor="precio">Precio</label>
                            <input className="form-control" min={0} type="number" name="precio" id="" />
                        </div>

                        <div className="d-flex flex-column mb-2">
                            <label className="mb-2" htmlFor="img">Imagen</label>
                            <input className="form-control" type={"file"} name="img" id="" />
                        </div>

                        <div className="text-center mb-2 mt-2">
                            <button className="btn btn-primary">Crear Viaje</button>
                        </div>
                    </form>
                </div>
            </div>
            {/*             <form action="" method="POST" autoComplete="false">

                <label for="destino">Destino</label>
                <input type="text" name="destino" id="destino" placeholder="" required />
                <br />

                <label className="descripcion" for="descripcion">Descripcion</label>
                <textarea name="descripcion" id="" cols="20" rows="10" required></textarea>
                <br />

                <label for="precio">Precio</label>
                <input type="number" name="precio" placeholder="" required />
                <br />

                <label for="imagen">Imagen</label>
                <input type="file" name="image" src="" alt="" accept="image/png, .jpg, jpeg" required />

                <br />

                <input type="submit" className="btn-submit" value="Crear viaje" />
            </form> */}
        </div>
    )
}