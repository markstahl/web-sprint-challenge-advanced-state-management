import React from "react";
import { connect } from 'react-redux';
import { deleteSmurf } from "../actions"

const SmurfTile = (props) => {
    const { smurf, deleteSmurf } = props

    return (
        <div className="smurf">
            <h3>{smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button className="delete" onClick={() => deleteSmurf(smurf.id)}>X</button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(SmurfTile);