import React from 'react'
import {useSelector} from 'react-redux'
const Notification = () => {
  const styleDisplay = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const styleHidden={
    display: 'none'
  }

  const notification=useSelector(state=>state.notification);
  return (
    <div style={notification!==null?styleDisplay:styleHidden}>
      {notification}
    </div>
  )
}

export default Notification