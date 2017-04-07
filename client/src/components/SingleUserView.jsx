import React, { Component } from 'react'

const SingleUserView = ({ clickyFnc, data }) => (
  <div 
    onClick={() => clickyFnc(data)} >
    {console.log('dataatatat', data)}
    {console.log('clickckckck', clickyFnc)}
    <h5 
      className='singleUser' 
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
