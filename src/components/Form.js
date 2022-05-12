import React from "react";

function Form() {
    return (
        <form className='new'>
            <input type="text" name="text" autoComplete="off" />
            <button type="submit" className="btn">Add</button>
        </form>
    );
}

export default Form;