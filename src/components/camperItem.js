import React from 'react';

const camperItem = ({individualCamper}) =>{
  return(
    <tr>
      <th className="individual-row" scope="row">
        <span className="span">
          <img
            className="profile-badge"
            src={individualCamper.img}
            alt={individualCamper.username}
          />
          <h6 className="profile-name">{individualCamper.username}</h6>
        </span>
      </th>
      <td>{individualCamper.recent}</td>
      <td>{individualCamper.alltime}</td>
    </tr>
  )
}

export default camperItem;
