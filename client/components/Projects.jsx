import React from 'react'

import Tile from './ProjectTile'
import projData from '../../public/data/projects'

const Projects = () => (
  <div className='projects-container'>
    <h2>Projects</h2>
    {renderProjTiles()}
  </div>
) //projects page ? list : tiles

const renderProjTiles = () => (
  projData.map((proj) => (
    Tile(proj)
  ))
)

export default Projects
