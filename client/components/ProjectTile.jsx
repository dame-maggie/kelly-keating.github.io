import React from 'react'

const ProjectTile = (proj) => (
  <div className='project-tile' key={proj.alias}>
    <img src={proj.image} className='proj-img'/>
    <h3>{proj.name}</h3>
    {proj.blurb}
  </div>
)

export default ProjectTile
