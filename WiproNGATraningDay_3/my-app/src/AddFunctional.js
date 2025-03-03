import React, { useState } from 'react';

const AddFunctional = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(0);

    const handleAdd = (event) => {
        event.preventDefault();
        setResult(Number(num1) + Number(num2));
    };

    return React.createElement(
        'div',
        null,
        React.createElement('h3', null, 'Add Two Numbers (Function Component)'),
        React.createElement(
            'form',
            { onSubmit: handleAdd },
            React.createElement('input', { type: 'number', value: num1, onChange: (e) => setNum1(e.target.value), placeholder: 'Enter first number' }),
            React.createElement('input', { type: 'number', value: num2, onChange: (e) => setNum2(e.target.value), placeholder: 'Enter second number' }),
            React.createElement('button', { type: 'submit' }, 'Add'),
            React.createElement('input', { type: 'number', value: result, readOnly: true, placeholder: 'Result' })
        )
    );
};

export default AddFunctional;
