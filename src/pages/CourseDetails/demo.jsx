import React from 'react';
import Layout from "../../components/Layout";
import styled from 'styled-components'
// import  './style.css'


function DemoCourseDetail()
{
  return(
   <Layout>
     {/* Head */}
     <div className="head">
       <div className="row">
        <div className="container col-xl-6 offset-xl-2 col-lg-7 col-md-9">
          <div className="head__link">
            <a href="#" className="guide-link">Lorem, ipsum dolor.</a>
            <i class="far fa-chevron-right forward-arrow"></i>
            <a href="#" className="guide-link">Lorem, ipsum dolor.</a>
            <i class="far fa-chevron-right forward-arrow"></i>
            <a href="#" className="guide-link">Lorem, ipsum dolor.</a>
          </div>
          <div className="head__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.</div>
          <div className="head__des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati magni repudiandae culpa voluptatum perferendis suscipit!</div>
          <div className="head__created-by">Created by <a link href="#" className="profile-link">Jose Portilla</a></div>
          <div className="head__buttons">
          <a href="#"><div className="buttons__btn">Wishlist<i class="far fa-heart buttons__icon"></i></div></a>
          <a href="#"><div className="buttons__btn">Share<i class="fal fa-share buttons__icon"></i></div></a>
          <a href="#"><div className="buttons__btn">Gift this course</div></a>

          </div>
        </div>
      </div>
    </div>
   </Layout>
  )
}




export default DemoCourseDetail;