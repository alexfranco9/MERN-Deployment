import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { Link } from '@reach/router';

const Home = props => {
    const [allPets, setAllPets] = useState(null);
    const [reset, setReset] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setAllPets(res.data))
            .catch(err => console.log("Error!", err))
    }, [reset])

    return(
        <>
            <div className="App">
                <h1> These pets are looking for a good home. </h1>
                <Link to="/pet/new"><p>Add a pet to the shelter</p></Link>
                <br/>
                <table class="table table-bordered container">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            </table>
            </div>
                {

                allPets ? allPets.sort(function(a, b) {
                    if(a.type.toLowerCase() < b.type.toLowerCase()) return -1;
                    if(a.type.toLowerCase() > b.type.toLowerCase()) return 1;
                    return 0;
                })
                
                .map((pet, i) => <Card key={i} pet={pet} />)
                
                : ""

            }
        </>
    );
}

export default Home;