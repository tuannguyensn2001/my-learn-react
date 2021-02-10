import {React} from 'react';
import styled from "styled-components";
import Category from "./Common/Category";


const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100px
`

const CategoryContent = styled.div`
  margin-top: 50px;
  text-align: center;
`

const Slogan = styled.div`
  color: #6b6bf3;
  font-weight: bold;
`

const ListCategory = styled.div`
  margin-top: 50px;  
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

function CategoryBanner()
{
    return (
        <div className="container">
            <CategoryWrapper>
                <CategoryContent>
                    <Slogan>HÃY BẮT ĐẦU NGAY TỪ HÔM NAY</Slogan>
                    <h1>Chọn chủ đề bạn yêu thích</h1>
                </CategoryContent>
            </CategoryWrapper>

            <ListCategory>
                <div>
                    <Category/>
                </div>
                <div>
                    <Category/>
                </div>
                <div>
                    <Category/>
                </div>
                <div>
                    <Category/>
                </div>
                <div>
                    <Category/>
                </div>
                <div>
                    <Category/>
                </div>


            </ListCategory>
        </div>
    )
}

export default CategoryBanner;