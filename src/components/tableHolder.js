import React from 'react';
import CamperItem from './camperItem';



const CamperList = ({camperlist, onSelectedDisplay, sortByTitle}) => {


  const camperItems = camperlist.map((camper) => {
    return(
    <CamperItem
      individualCamper={camper}
      key={camper.username}
      />
    )
  });

  return(
    <div>
      <div className="leaderboard-div"><h3>Points Leaders: <p>{sortByTitle}</p></h3></div>
    <table className="table table-striped table-bordered tableFont">
      <thead>
        <tr>
          <th scope="col">Camper Name</th>
          <th scope="col">Points in last 30 days</th>
          <th scope="col">All Time Points</th>
      </tr>
      </thead>
      <tbody>
        {camperItems}
      </tbody>
    </table>
  </div>
  )
}

export default CamperList;
