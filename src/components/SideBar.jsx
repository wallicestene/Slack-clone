import { Add, Apps, Bookmark, CreateOutlined, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import { useCollection } from "react-firebase-hooks/firestore"
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const SideBar = () => {
    const [channels, loading, error] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth)
  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Wallace fam</h2>
                <h3>
                    <FiberManualRecord/>
                    {user?.displayName}
                </h3>
            </SidebarInfo>
            <CreateOutlined/>
        </SidebarHeader>

        <SidebarOption Icon = {InsertComment} title="Threads"/>
        <SidebarOption Icon = {Inbox} title="Mentions & reactions"/>
        <SidebarOption Icon = {Drafts} title="Saved Items"/>
        <SidebarOption Icon = {Bookmark} title="Channel browser"/>
        <SidebarOption Icon = {PeopleAlt} title="People & user groups"/>
        <SidebarOption Icon = {Apps} title="Apps"/>
        <SidebarOption Icon = {FileCopy} title="File browser"/>
       <SidebarOption Icon = {ExpandLess} title="Show Less"/>
       <hr />
       <SidebarOption Icon = {ExpandMore} title="Show More"/>
       <hr />
       <SidebarOption Icon = {Add} addChannelOption title="Channels"/>

       {channels?.docs.map(doc => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
       ))}
        </SidebarContainer>
  )
}

export default SideBar

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
    display: none;
  }
    > hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    margin-top: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`
const SidebarInfo = styled.div`
    flex: 1;

    > h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`
