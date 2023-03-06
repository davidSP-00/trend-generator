import React from 'react'
import "./HeadSection.scss"
import img from '../../assets/profile.jpg'
export const HeadSection = () => {
    return (
        <section className=' d-flex head-section' id="head">
            <div className="d-flex head-title" >
                <div  className="description">
                    <h2>
                    ¡Consigue videos publicitarios impresionantes para TikTok de manera rápida y económica!
                    </h2>
                    <button className='empieza'><a href="#generation">Consigue tu video !!!</a></button>
                    </div>
            </div>

        </section>
    )
}
