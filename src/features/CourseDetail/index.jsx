import React from 'react';
import Layout from "../../components/Layout";
import Header from "./components/Header";
import './style.css';
function CourseDetail() {


    return (
        <Layout>
            <div className="container-fluid">
            {/* Header */}
                <div className="row head">
                    <div className="container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
                        <div className="head__link">
                            <a href="#" className="guide-link">Lorem, ipsum dolor.</a>
                            <i class="far fa-chevron-right forward-arrow"></i>
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
            {/* End header */}


            {/* Body */}
                <div className="row">
                  <div className="des-box container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
                      <div className="des-box__heading">Lorem ipsum dolor sit.</div>
                      <div className="des-box__body">
                        <div className="body__cover">
                            <div className="body__cover-col">
                                <i class="check-icon fal fa-check"></i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sequi amet magnam unde laborum similique!
                            </div>
                            <div className="body__cover-col">
                                <i class="check-icon fal fa-check"></i>Lorem ipsum dolor sit amet consectetur adipisicing.
                            </div>
                        </div>
                        <div className="body__cover">
                            <div className="body__cover-col">
                                <i class="check-icon fal fa-check"></i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sequi amet magnam unde laborum similique!
                            </div>
                            <div className="body__cover-col">
                                <i class="check-icon fal fa-check"></i>Lorem ipsum dolor sit amet consectetur adipisicing.
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            {/* End body */}



            {/* Buy course bar */}
            <div className="buy-course container col-xl-3 offset-xl-8">
                <div className="buy-course__video">
                    {/* Put the video here */}
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/b7ffmtnuSGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="buy-course__cover">
                    <div className="bc-cover__price">
                        <div className="price__current">$11.99</div>
                        <div className="price__default">$129.99</div>
                        <div className="price__sale">91% off</div>
                    </div>
                    <div className="bc-cover__sale-time">
                        <i class="clock-icon fal fa-alarm-clock"></i>
                        1 day left at this price!
                    </div>
                    <button className="bc-btn__add bc-btn">Add to cart</button>
                    <button className="bc-btn__buy bc-btn">Buy now</button>
                </div>
            </div>
            {/* End buy course bar */}
            
            
            
            
            {/* Description */}
            <div className="description container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
                <div className="description__cover">
                    <div className="description__title">Description</div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nam. Dolorum aspernatur deserunt adipisci laborum optio eius iusto ullam ab quibusdam excepturi, tempore sapiente, nemo minus quidem expedita quo unde! Recusandae tenetur amet odio veritatis eos. Deserunt sed soluta pariatur veritatis? Eligendi a quod officia. Officia non delectus soluta voluptates. Nihil aut, veritatis debitis eum, dolores optio maxime ab hic dolore omnis laboriosam molestiae cumque atque! Ipsam obcaecati veritatis recusandae nam a, vitae, assumenda nemo nesciunt officiis quod commodi culpa? Quidem architecto omnis reprehenderit doloremque cum qui aliquam aspernatur dignissimos autem optio nesciunt, inventore, nihil vel, ipsa quasi sint blanditiis quam. Fuga aut numquam eos, hic officiis non alias velit laudantium dicta repellendus accusantium assumenda itaque cupiditate officia. Quae neque recusandae minima sequi, saepe et totam voluptate esse unde soluta suscipit illum nesciunt cum quaerat libero dignissimos, modi amet ullam vero inventore, quo eos delectus ab! Quae quo neque hic dolore necessitatibus reprehenderit, suscipit aliquam sequi accusamus delectus molestiae, id asperiores doloremque! Aperiam dolorum, aliquam illo et ad exercitationem? Recusandae laborum qui velit, asperiores voluptate inventore nulla maxime beatae aperiam quibusdam soluta voluptas earum molestiae laboriosam dicta saepe molestias tenetur facere. Incidunt amet aut aspernatur, ratione aliquid impedit nihil consectetur consequuntur adipisci modi quis aliquam itaque voluptatem optio architecto voluptatum totam pariatur illum ex ipsa quae vitae enim alias! Veniam eaque ipsam dignissimos ratione nobis quo neque blanditiis delectus eum tempora quod, natus quibusdam voluptatibus velit soluta veritatis facilis? In, nesciunt exercitationem eum soluta sunt quis, mollitia sed impedit ab ratione cupiditate et! Rerum, dignissimos et similique beatae eum omnis. Quod fugit ea distinctio, minus quos culpa, accusantium debitis quasi sapiente aspernatur molestias neque sint non vero rerum cum dignissimos dolores, quam possimus odio iure. Tenetur vitae porro deleniti repudiandae, cumque commodi similique veritatis quidem, suscipit recusandae odit, alias nihil?                    
                </div>
                {/* Tao cần 1 đoạn script để:
                1. bỏ overflow: hidden trong .description__cover
                2. bỏ background trong .description__cover:before
                3. display: none; cho .read-more 
                    khi click chuột vào thẻ a ở dưới */}
                <button className="read-more">Read more<i class="fal fa-caret-down"></i></button>
            </div>

            {/* End description */}
            


            {/* Instructor's information */}
            <div className="instructor container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
                <div className="ins__title">Instructor</div>
                <div className="ins__cover">
                    <div className="ins__name-cover">
                        <div className="ins__name">Jose Portilla</div>
                        <div className="ins__pos">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    </div>
                    <div className="ins__info">
                        {/* Put picture here (height == width) */}
                        <img className="ins__picture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEVCwPs5vvue3v2o4v205v6/6v7K7f7V8f6h3/3i9f4xvPsouvuY3f39/v/1+//q+P+45/5GFGvPAAABa0lEQVR4nO3dSU7DABBFQWdwBidA7n9avGABYkEUKQplvzrBf/uWenh7/zgfj8fDbJztv+x+Om0fddr9aX+P23iPwy/nYbxM323+q+kxl+swTsOSbbYrKLwtvnC/efWIp6rQV6GvQl+Fvgp9Ffrmwl2Ftgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfKgq3Fdoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6FtF4Wnxhcu/GKoQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb5VfGGpEFehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8uHKdXj3iqCn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9FfrmwkOFtgp9Ffoq9FXoq9BXoa9C3zoKL5slm67D+bpdsuvhE57nEnPutj/JAAAAAElFTkSuQmCC" alt="Teacher A"/>
                        <div className="ins__overview">
                            <div className="overview__info"><i class="overview__icon fas fa-star"></i>Lorem ipsum dolor sit.</div>
                            <div className="overview__info"><i class="overview__icon fas fa-medal"></i>Lorem ipsum dolor sit.</div>
                            <div className="overview__info"><i class="overview__icon fas fa-user"></i>Lorem ipsum dolor sit.</div>
                            <div className="overview__info"><i class="overview__icon fas fa-play-circle"></i>Lorem ipsum dolor sit.</div>
                        </div>
                    </div>
                    <div className="ins__des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid in accusamus dolores repudiandae reiciendis, modi possimus sapiente iusto sit dolor veritatis error dolorum deleniti quos suscipit, saepe maxime quis nisi!
                    </div>
                </div>
            </div>
            {/* End Instructor's information */}

        </Layout>
    )
}

export default CourseDetail;