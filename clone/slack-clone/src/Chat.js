import React from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutLinedIcon from '@material-ui/icons/InfoOutlined';
import { selectRoomId } from './features/appSlice';
import {useSelector} from 'react-redux';
import ChatInput from './ChatInput';
const Chat = () => {
    const roomId = useSelector(selectRoomId)
    return (
        <ChatContainer>
            <>
            <Header>
            <HeaderLeft>
            <h4><strong>#room-name</strong></h4>
            <StarBorderOutlinedIcon/>
            </HeaderLeft>
            <HeaderRight>
            <p><InfoOutLinedIcon/> Details</p>
            </HeaderRight>
            </Header>
            <ChatMessages>
<ChatInput/>
            </ChatMessages>
            </>
        </ChatContainer>
    )
}

export default Chat;

const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;
`;
const HeaderLeft = styled.div`
display:flex;
align-items:center;
>h4{
    display:flex;
    text-transform:lowercase;
    margin-right:10px;
}
>h4 > .MuiSvgIcon-root{
    margin-left:10px;
    font-size:18px;
}
`;
const HeaderRight = styled.div`
>p{
    display:flex;
    align-items:center;
    font-size:14px;

}

>p > .MuiSvgIcon-root{
    margin-right:5px !important;
    font-size:16px;
}

`;
const ChatContainer = styled.div`
flex:0.7;
flex-grow:1;
overflow-y:scroll;
margin-top:60px;
`;
const ChatMessages = styled.div``;
