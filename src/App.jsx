
import './App.css'
import UsersList from "./components/users/usersList.jsx";
import CommentsList from "./components/comments/commentsList.jsx";
import PostsList from "./components/posts/postsList.jsx";
import {useState} from "react";

import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: center;
`

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Table = styled.table`
    width: 100%;
    margin-top: 50px;
`

const Title = styled.th`
    color: var(--blue);
`

const UserSTd = styled.td`
    width: 390px;
    display: block;
`
const CommentsTd = styled.td`
    width: 400px;
    display: block;
`

const THead  = styled.thead``

const TBody = styled.tbody``

function App() {

    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const handleUserClick = (userId) => {
        setSelectedUserId(userId);
        setSelectedPostId(null)
    };
    const handlePostClick = (postId) => {
        setSelectedPostId(postId);
    };

  return (
    <>
      <Header>
        <h1 style={{fontSize: '5em', color:'var(--grey)'}}>Blog</h1>
      </Header>

      <Main>

          <Table>
              <THead>
                <tr>
                  <Title><h1>Users</h1></Title>
                  <Title><h1>Post</h1></Title>
                  <Title><h1>Comments</h1></Title>
                </tr>
              </THead>


              <TBody>
                  <tr>
                      <UserSTd>
                          <UsersList handleUserId={handleUserClick} selectedUserId={selectedUserId}/>
                      </UserSTd>
                      <td>
                          <PostsList userId={selectedUserId} handlePostClick={handlePostClick} selectedPostId={selectedPostId}/>
                      </td>

                      <CommentsTd>
                          <CommentsList postId={selectedPostId}/>
                      </CommentsTd>
                  </tr>
              </TBody>
          </Table>
      </Main>

    </>
  )
}

export default App
