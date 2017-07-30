import React from 'react'

const ProjectTile = (proj) => (
  <div className='project-tile'>
    <img src={proj.image} className='proj-img'/>
    This is a project.
    {proj.name}
    {proj.blurb}
  </div>
)

export default ProjectTile
