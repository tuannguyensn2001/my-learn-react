import React,{useState} from 'react';
import styled from "styled-components";
import PlaylistItem from "./Common/PlaylistItem";


const PlaylistWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 12px 16px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
`

const Icon = styled.i`
  font-size: 15px;
  
  
  &:hover{
    cursor: pointer;
  }
`

const ListLesson = styled.div`
`

function Playlist() {

    const [isOpened,setIsOpened] = useState(false);

    const renderPlaylistItem = [1,2,3,4,5,6,7,8,9].map(item => {
        return(
            <PlaylistItem key={item} />
        )
    })

    return (
        <PlaylistWrapper>
           <div>
               <Header>
                   <div>
                       <Title>
                           Lập trình javascript
                       </Title>
                       <div>Hoàn thành 1/110 bài học</div>
                   </div>
                   <div>
                       <Icon className="fas fa-step-backward"></Icon>
                   </div>
               </Header>

               <ListLesson>
                   {renderPlaylistItem}
               </ListLesson>
           </div>

        </PlaylistWrapper>
    )
}

export default Playlist;