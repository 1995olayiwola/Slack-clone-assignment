import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import { useRef} from 'react';
import {db} from './firebase';
import firebase from 'firebase';
import {useState} from 'react';

const ChatInput = ({channelName,channelId}) => {

    const[input,setInput] = useState("");
    const inputRef = useRef();
    const sendMessage=(e)=>{
        e.preventDefault();

        if(channelId){
            return false;
        }
db.collection('rooms').doc(channelId).collection('messages').add({
    message:input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    user: "Olayiwola Abdur Rahmon",
    userImage: "https://scontent.flos3-1.fna.fbcdn.net/v/t1.0-9/12345470_157068414649058_4393365328603566911_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeGJ9e5C1-0cRovqysbTzKL56XMhe_ItZQnpcyF78i1lCUSxco6NNhe4lKTOIXobxuKq1y5cKiItzMcdYPjIWyku&_nc_ohc=iPhmEoq2508AX8gKOKL&_nc_ht=scontent.flos3-1.fna&oh=59dca728549989f7878ac8467606ccf0&oe=605BA00F"
});
setInput("");

    };
    return (
        <ChatInputContainer>
            <form  >
                <input  onChange={(e)=>setInput(e.target.value)} value={input} placeholder={`Message #Room`}/>
<Button hidden type="submit" onClick={sendMessage}>

</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;
const ChatInputContainer= styled.div`
border-radius:20px;
> form {
    position:relative;
    display:flex;
    justify-content:center;

}
> form > input{
position:fixed;
bottom:30px;
width:60%;
border:1px solid gray;
border-radius:3px;
padding:20px;
outline:none;
}

> form > button {
    display:none !important;
}

`;
