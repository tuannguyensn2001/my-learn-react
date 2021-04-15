import React, {useState} from "react";
import Layout from "../../../components/Layout";
import styled from "styled-components";


const DescriptionCover = styled.div`
  max-height: ${props => props.isOpen ? '100%' : '200px' };
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    //background: linear-gradient(transparent 150px, white);
    background: ${props => !props.isOpen ? 'linear-gradient(transparent 150px, white)' : 'unset' };
  }
`

const DescriptionDefault = styled.div`
  margin-top: 32px;
`
const DescriptionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`

const ReadMore = styled.button`
  all: unset;
  margin-top: 16px;
  color: #5624d0;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  
  &:hover{
    color: #401b9c;
  }
  
  &:focus{
    outline: none;
  }
`
export default () => {

    const [isOpen,setIsOpen] = useState(false);



    const handleOnClick = () => {
        setIsOpen(() => {
            return !isOpen;
        })
    }

    const render = () => {
        if (isOpen){
            return(
                <div>
                    Show less
                    <i className="fal fa-caret-up"/>
                </div>
            )
        }

        return(
            <div>
                Read more
                <i className="fal fa-caret-down"/>
            </div>
        )
    }

    return (
        <DescriptionDefault className="description container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
            <DescriptionCover isOpen={isOpen} className="description__cover">
                <DescriptionTitle className="description__title">Description</DescriptionTitle>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nam. Dolorum aspernatur deserunt
                adipisci laborum optio eius iusto ullam ab quibusdam excepturi, tempore sapiente, nemo minus quidem
                expedita quo unde! Recusandae tenetur amet odio veritatis eos. Deserunt sed soluta pariatur veritatis?
                Eligendi a quod officia. Officia non delectus soluta voluptates. Nihil aut, veritatis debitis eum,
                dolores optio maxime ab hic dolore omnis laboriosam molestiae cumque atque! Ipsam obcaecati veritatis
                recusandae nam a, vitae, assumenda nemo nesciunt officiis quod commodi culpa? Quidem architecto omnis
                reprehenderit doloremque cum qui aliquam aspernatur dignissimos autem optio nesciunt, inventore, nihil
                vel, ipsa quasi sint blanditiis quam. Fuga aut numquam eos, hic officiis non alias velit laudantium
                dicta repellendus accusantium assumenda itaque cupiditate officia. Quae neque recusandae minima sequi,
                saepe et totam voluptate esse unde soluta suscipit illum nesciunt cum quaerat libero dignissimos, modi
                amet ullam vero inventore, quo eos delectus ab! Quae quo neque hic dolore necessitatibus reprehenderit,
                suscipit aliquam sequi accusamus delectus molestiae, id asperiores doloremque! Aperiam dolorum, aliquam
                illo et ad exercitationem? Recusandae laborum qui velit, asperiores voluptate inventore nulla maxime
                beatae aperiam quibusdam soluta voluptas earum molestiae laboriosam dicta saepe molestias tenetur
                facere. Incidunt amet aut aspernatur, ratione aliquid impedit nihil consectetur consequuntur adipisci
                modi quis aliquam itaque voluptatem optio architecto voluptatum totam pariatur illum ex ipsa quae vitae
                enim alias! Veniam eaque ipsam dignissimos ratione nobis quo neque blanditiis delectus eum tempora quod,
                natus quibusdam voluptatibus velit soluta veritatis facilis? In, nesciunt exercitationem eum soluta sunt
                quis, mollitia sed impedit ab ratione cupiditate et! Rerum, dignissimos et similique beatae eum omnis.
                Quod fugit ea distinctio, minus quos culpa, accusantium debitis quasi sapiente aspernatur molestias
                neque sint non vero rerum cum dignissimos dolores, quam possimus odio iure. Tenetur vitae porro deleniti
                repudiandae, cumque commodi similique veritatis quidem, suscipit recusandae odit, alias nihil?
            </DescriptionCover>
            {/* Tao cần 1 đoạn script để:
                1. bỏ overflow: hidden trong .description__cover
                2. bỏ background trong .description__cover:before
                3. display: none; cho .read-more
                    khi click chuột vào thẻ a ở dưới */}
            <ReadMore onClick={handleOnClick} className="read-more">
                {render()}
            </ReadMore>

        </DescriptionDefault>
    )
}