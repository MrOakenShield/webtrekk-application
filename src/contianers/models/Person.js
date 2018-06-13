import React from 'react';


const person = (props) => (
    <tr>
        
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.birthday}</td>
    </tr>
);

export default person;