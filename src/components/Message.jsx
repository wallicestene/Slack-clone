import React from 'react'
import styled from 'styled-components'

const Message = ({message, timestamp, user, userImage}) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>{user}{" "}
        <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
         </h4>
         <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  >img{
    height: 45px;
    border-radius: 9px;
  }
`
const MessageInfo = styled.div`
 margin-left: 10px;

 >h4 > span{
  color: gray;
  font-weight: 300;
  margin-left: 4px;
  font-size: 10px;
 }
`