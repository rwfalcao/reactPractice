import React from 'react'

function ProjectDetails(props) {
  const pk = props.match.params.pk;
  console.log(props);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {pk}</span>
            <p>lorem ipsum sei lá o que</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by the Net Ninja</div>
            <div>2nd September, 2AM</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
