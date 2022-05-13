import React, { useState } from "react";

function Form(props) {

    const [name, setName] = useState('');

    function handleSubmit(e) {
            e.preventDefault();
            if (name) {
                props.addTask(name);
                setName('');
            } else {
                console.log('no value');
                return
            }
    }

    function handleChange(e) {
            setName(e.target.value);
    }

    return (
        <form className='new' onSubmit={handleSubmit}>
            <input type="text" name="text" autoComplete="off" value={name} onChange={handleChange} />
            <button type="submit" className="btn">Add</button>
        </form>
    );
}

export default Form;