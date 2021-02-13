import React,{useState,useEffect} from 'react';
import TabLesson from "./TabLesson";
import Overview from "./Overview";
import Notes from "./Notes";
import styled from "styled-components";
import Related from "./Related";
import Playlist from "../Playlist";


const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TabContent = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 90%;

  @media (max-width: 575.98px) {
    width: 100%;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 90%;
  }
`
function ContentLessonTab()
{
    const [currentTab,setCurrentTab] = useState('overview');
    const [tabs,setTabs] = useState([
        {
          key: 'content',
          name: 'Nội dung',
          component: <Playlist width={100}/>,
          isVisibile: false,
        },
        {
            key: 'overview',
            name: 'Tổng quan',
            component: <Overview/>,
            isVisibile: true,
        },
        {
            key: 'notes',
            name: 'Ghi chú',
            component: <Notes/>,
            isVisibile: true,
        },
        {
            key: 'related',
            name: 'Liên quan',
            component: <Related/>,
            isVisibile: true,
        }
    ])

    useEffect(() => {

        const handleResize = event => {
            if (event.target.innerWidth < 992){
               setTabs(prev => {
                   prev[0].isVisibile = true;
                   return [...prev];
               })
            } else {
                setCurrentTab(prev => {
                    if (prev === 'content') return 'overview';
                    return prev;
                })
                setTabs(prev => {
                    prev[0].isVisibile = false;
                    return [...prev];
                })


            }
        }

        window.addEventListener('resize',handleResize)

        return  () => {
            window.removeEventListener('resize',handleResize);
        };
    },[])

    const renderContent = tabs.find(tab => tab.key === currentTab).component;


    return (
        <ContentContainer>
            <Content>
                <TabLesson currentTab={currentTab} changeTab={(key) => setCurrentTab(key)} tabs={tabs} />

                <TabContent>
                    {renderContent}
                </TabContent>





            </Content>
        </ContentContainer>
    )
}

export default ContentLessonTab;