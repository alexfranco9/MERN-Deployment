import React from 'react';

const Form = props => {
    const {myForm, error, onChangeHandler, submitHandler} = props;

    return(
        <>
            <form onSubmit={submitHandler} className="container">
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input type="text" name="petName" className="form-control" value={myForm.petName} onChange={onChangeHandler} />
                    {
                        error.petName ? <span className="text-danger">{error.petName.message}</span> : ""
                    }
                    
                </div>

                <div className="form-group">
                    <label>Pet Type:</label>
                    <input type="text" name="type" className="form-control" value={myForm.type} onChange={onChangeHandler} />
                    {
                        error.type ? <span className="text-danger">{error.type.message}</span> : ""
                    }
                </div>

                <div className="form-group">
                    <label>Pet Description:</label>
                    <input type="text" name="description" className="form-control" value={myForm.description} onChange={onChangeHandler} />
                    {
                        error.description ? <span className="text-danger">{error.description.message}</span> : ""
                    }
                </div>
                
                <h3>Skills (optional): </h3>
                <div className="form-group">
                    <label>Skill 1:</label>
                    <input type="text" name="skillOne" className="form-control" value={myForm.skillOne} onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <label>Skill 2:</label>
                    <input type="text" name="skillTwo" className="form-control" value={myForm.skillTwo} onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <label>Skill 3:</label>
                    <input type="text" name="skillThree" className="form-control" value={myForm.skillThree} onChange={onChangeHandler} />
                </div>

                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Form;