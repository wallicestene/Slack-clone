import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const ChatInput = ({channelName, channelId, ChatRef}) => {
    const [user] =useAuthState(auth)
    
    const [input, setInput]= useState("")

    const sendMessage =(e)=>{
        e.preventDefault()
        if(!channelId){
            return false
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName, 
            userImage:  user?.photoURL
        })
        ChatRef?.current?.scrollIntoView({
            behavior: "smooth"
        })
        setInput("")
    }

  return (
    <ChatInputContainer>
        <form>
            <input value={input}
            placeholder={`Message #${channelName}`}
            type="text" 
            onChange={(e) => setInput(e.target.value)}
            />
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput
const ChatInputContainer = styled.div`
    border-radius: 20px;
    
    > form{
        position: relative;
        display: flex;
        justify-content: center;
    }
    >form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    >form > button{
        display: none !important;
    }
`