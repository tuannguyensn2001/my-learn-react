import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CategoryItem = styled.div`
  height: 160px;
  width: 160px;
  background-image: url("https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;;

`

function Category() {
    return (
        <Link>
                <CategoryItem>
                </CategoryItem>
        </Link>
    )
}

export default Category;