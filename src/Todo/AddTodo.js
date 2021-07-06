import React, { useState } from 'react';
import PropTypes from 'prop-types'

function useInputValue(defualtValue = '') {
    const [value, setValue] = useState(defualtValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('').bind

    function submitHandler(event) {
        event.preventDefualt()

        if (input.value().trim()) {
            onCreate(input.value)
            input.clear()
        }
    }

    return (
        <form 
            style={{marginBottom: '1rem'}} 
            onSubmit={submitHandler}
        >
            <input type='text' {...input} />
            <button type='submit'>Add todo!</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo