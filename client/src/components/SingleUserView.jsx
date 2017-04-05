import React, { Component } from 'react'

const SingleUserView = ({ data }) => (
  <div>
    <h5><img className='profilePicture' src={data.picture} /> <span className='profileName'>{data.firstName + " " + data.lastName}</span></h5>
    {console.log(data.picture)}
  </div>
)

export default SingleUserView
