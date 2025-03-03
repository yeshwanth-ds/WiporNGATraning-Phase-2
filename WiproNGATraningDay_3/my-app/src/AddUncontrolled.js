import React, { Component } from 'react';

export default class AddUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.num1 = React.createRef();
        this.num2 = React.createRef();
        this.result = React.createRef();
    }

    handleAdd = (event) => {
        event.preventDefault();
        const sum = parseFloat(this.num1.current.value) + parseFloat(this.num2.current.value);
        this.result.current.value = sum;
    };

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement('h3', null, 'Add Two Numbers (Uncontrolled Component)'),
            React.createElement(
                'form',
                { onSubmit: this.handleAdd },
                React.createElement('input', { type: 'number', ref: this.num1, placeholder: 'Enter first number' }),
                React.createElement('input', { type: 'number', ref: this.num2, placeholder: 'Enter second number' }),
                React.createElement('button', { type: 'submit' }, 'Add'),
                React.createElement('input', { type: 'number', ref: this.result, placeholder: 'Result', readOnly: true })
            )
        );
    }
}
