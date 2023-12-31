import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import Card from './../core/Card';
import { list } from "./helper/userapicalls";





const List = () => {

    const [programs, setPrograms] = useState([]);
    const [error, setError] = useState(false);

    const loadAllPrograms = () => {
        list().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setPrograms(data)
            }
        })
    }

    useEffect(() => {
        loadAllPrograms();
    })



    return (
        <Base title="Programs">

            {programs.map((program, index) => {
                const { name, link, logo, isPaid, description, duration, location, organization } = program
                return (
                    <div key={index}>
                        <Card
                            name= {name}
                            link= {link}
                            logo= {logo}
                            isPaid= {isPaid}
                            description= {description}
                            duration= {duration}
                            location= {location}
                            organization= {organization}
                        />
                    </div>
                )
            })}



        </Base>
    )
}

export default List