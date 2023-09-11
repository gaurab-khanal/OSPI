import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import Card from './../core/Card';
import { useLoaderData } from 'react-router-dom';






const List = () => {
     const programsPromise = useLoaderData();

     programsPromise
    .then((programs) => {
      if (!Array.isArray(programs)) {
        throw new Error("Data is not in an array format");
      }
        
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
