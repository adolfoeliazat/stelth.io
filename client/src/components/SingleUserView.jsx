import React, { Component } from 'react'

const SingleUserView = ({ data }) => (
  <div>
    {console.log(data)}
    <h5 
      className='singleUser' 
      onClick={() => data.saveUser} 
      style={{ cursor: 'pointer' }}>
        <img 
          className='profilePicture' 
          src={data.picture} /> 
            <span 
              className='profileName'>
              {data.firstName + " " + data.lastName}
            </span>
      </h5>
  </div>
)

export default SingleUserView
