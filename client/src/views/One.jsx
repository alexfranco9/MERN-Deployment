import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const One = props => {
    const [onePet, setOnePet] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => setOnePet(res.data))
            .catch(err => console.log(err))
    }, [props])
    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${props._id}`)
            .then(navigate("/"))
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <Link to="/"><p>back to home</p></Link>
            {
                onePet ?
            
            <div className="container">
            <button className="btn btn-danger" onClick={deletePet}> Adopt {onePet.petName} </button>
            <h1>Details about: {onePet.petName} </h1>
            <h3>Pet Type: {onePet.type} </h3>
            <h3>Description: {onePet.description} </h3>
            <h3>Skills: {onePet.skillOne} 
            {onePet.skillTwo}
            {onePet.skillThree}
            </h3>
            </div>: ""
            }
        </div>
    )
}

export default One;