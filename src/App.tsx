
import './App.css'

import {useState} from "react";

import styled from "styled-components";
import UsersList from "./components/users/usersList";
import CommentsList from "./components/comments/commentsList";
import PostsList from "./components/posts/postsList";

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
    display: flex;
    justify-content: center;
`

const UserSTd = styled.td`
    width: 390px;
    display: flex;
    justify-content: center;
`

const PostsTd = styled.td`
    width: 400px;
    display: flex;
    justify-content: center;
`
const CommentsTd = styled.td`
    width: 400px;

    display: flex;
    justify-content: center;

`


const TBody = styled.tbody``

function App() {

    const [selectedUserId, setSelectedUserId] = useState<number |null>(null);
    const [selectedPostId, setSelectedPostId] = useState<number| null>(null);
    const handleUserClick = (userId: number): void => {
        setSelectedUserId(userId);
        setSelectedPostId(null)
    };
    const handlePostClick = (postId: number): void => {
        setSelectedPostId(postId);
    };

  return (
    <>
      <Header>
        <h1 style={{fontSize: '5em', color:'var(--grey)'}}>Blog</h1>
      </Header>

      <Main>

          <Table>

              <TBody>
                  <tr style={{display: 'flex', gap: '15px'}}>
                      <UserSTd>
                          <UsersList handleUserId={handleUserClick} selectedUserId={selectedUserId}/>
                      </UserSTd>
                      <PostsTd>
                          <PostsList userId={selectedUserId} handlePostClick={handlePostClick} selectedPostId={selectedPostId}/>
                      </PostsTd>

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
