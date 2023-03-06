import React from 'react'
import Form from './form/Form'
import "./Generation.scss"
export const Generation = () => {
    return (
        <section className=' d-flex generation-section' id="generation">
            <h2>Genere su video</h2>
            <div className="d-flex container-who flex-wrap" >
                <div className='gen'>
                    <div className='text'>
                        Solo un unas cuantas imagenes de su producto, unas palabras y estará listo.
                    </div>
                </div>
            </div>
           <Form></Form>
        </section>
    )
}
