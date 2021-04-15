import React from 'react';

function Header()
{
    return(
        <div className="row head">
            <div className="container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
                <div className="head__link">
                    <a href="#" className="guide-link">Lorem, ipsum dolor.</a>
                    <i className="far fa-chevron-right forward-arrow"></i>
                </div>
                <div className="head__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.
                </div>
                <div className="head__des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati magni
                    repudiandae culpa voluptatum perferendis suscipit!
                </div>
                <div className="head__created-by">Created by <a link href="#" className="profile-link">Jose Portilla</a>
                </div>
                <div className="head__buttons">
                    <a href="#">
                        <div className="buttons__btn">Wishlist<i className="far fa-heart buttons__icon"></i></div>
                    </a>
                    <a href="#">
                        <div className="buttons__btn">Share<i className="fal fa-share buttons__icon"></i></div>
                    </a>
                    <a href="#">
                        <div className="buttons__btn">Gift this course</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;