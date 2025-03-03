import React from 'react';
import AddUncontrolled from './AddUncontrolled';
import AddFunctional from './AddFunctional';


function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(AddUncontrolled, null),
        React.createElement('hr'),
        React.createElement(AddFunctional, null)
    );
}

export default App;
