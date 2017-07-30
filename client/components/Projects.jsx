import React from 'react'

import Tile from './ProjectTile'
import projData from '../../public/data/projects'

const Projects = () => (
  <div className='projects-container'>
    Projects go here
    {renderProjTiles()}
  </div>
)

const renderProjTiles = () => (
  projData.map((proj) => (
    Tile(proj)
  ))
)

export default Projects
