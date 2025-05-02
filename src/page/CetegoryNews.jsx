import React from 'react'
import { useParams } from 'react-router'

function CetegoryNews() {

  const {id} = useParams();
  return (
    <div>CetegoryNews -{id}</div>
  )
}

export default CetegoryNews