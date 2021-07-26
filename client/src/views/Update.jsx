import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Update = props => {
    const [myForm, setMyForm] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => setMyForm(res.data))
            .catch(err => console.log("Something went wrong gettting data for update!"))
    }, [])
    const [error, setError] = useState({});
    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value});
    }
    const submitHandler = e => {
        e.preventDefault();

            axios.put(`http://localhost:8000/api/pet/update/${props._id}`, myForm)
                .then(res => {
                    if(res.data.error){
                        setError(res.data.error.errors)
                    } else {
                        navigate("/");
                    }
                })
                .catch(err => console.log(err))
    }
    return(
        <>  
            <div className="App">
                <h1> Edit: {myForm.petName} </h1>
                <Link to="/"><p>back to home</p></Link>
            </div>
            <Form myForm={myForm} error={error} onChangeHandler={onChangeHandler} submitHandler={submitHandler} />
        </>
    );
}

export default Update;