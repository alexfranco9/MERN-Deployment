import React from 'react';
import { Link } from '@reach/router';

const Card = props => {
    const {pet} = props;
    
    return (

        <table class="table table-bordered container">
            
            <tbody>
                <tr>
                    <td>{pet.petName}</td>
                    <td>{pet.type}</td>
                    <td> <Link to={`/pet/${pet._id}`}>Details</Link>  | <Link to={`/pet/update/${pet._id}`}>Edit</Link> </td>
                </tr>
            </tbody>
        </table>

    )
}

export default Card;