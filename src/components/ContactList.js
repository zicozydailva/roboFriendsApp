import React from 'react';

function ContactList(props) {
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.phone}</h2>
    </div>
  )
}

export default ContactList;