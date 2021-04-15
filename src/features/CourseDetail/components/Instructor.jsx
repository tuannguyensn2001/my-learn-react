import React from "react";
import Layout from "../../../components/Layout";

export default () => {
    return(
        <div className="instructor container col-xl-6 offset-xl-1 col-lg-7 col-md-9 col-sm-10">
            <div className="ins__title">Instructor</div>
            <div className="ins__cover">
                <div className="ins__name-cover">
                    <div className="ins__name">Jose Portilla</div>
                    <div className="ins__pos">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                </div>
                <div className="ins__info">
                    {/* Put picture here (height == width) */}
                    <img className="ins__picture"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEVCwPs5vvue3v2o4v205v6/6v7K7f7V8f6h3/3i9f4xvPsouvuY3f39/v/1+//q+P+45/5GFGvPAAABa0lEQVR4nO3dSU7DABBFQWdwBidA7n9avGABYkEUKQplvzrBf/uWenh7/zgfj8fDbJztv+x+Om0fddr9aX+P23iPwy/nYbxM323+q+kxl+swTsOSbbYrKLwtvnC/efWIp6rQV6GvQl+Fvgp9Ffrmwl2Ftgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfKgq3Fdoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6FtF4Wnxhcu/GKoQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb5VfGGpEFehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8uHKdXj3iqCn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9FfrmwkOFtgp9Ffoq9FXoq9BXoa9C3zoKL5slm67D+bpdsuvhE57nEnPutj/JAAAAAElFTkSuQmCC"
                         alt="Teacher A"/>
                    <div className="ins__overview">
                        <div className="overview__info"><i className="overview__icon fas fa-star"></i>Lorem ipsum dolor
                            sit.
                        </div>
                        <div className="overview__info"><i className="overview__icon fas fa-medal"></i>Lorem ipsum dolor
                            sit.
                        </div>
                        <div className="overview__info"><i className="overview__icon fas fa-user"></i>Lorem ipsum dolor
                            sit.
                        </div>
                        <div className="overview__info"><i className="overview__icon fas fa-play-circle"></i>Lorem ipsum
                            dolor sit.
                        </div>
                    </div>
                </div>
                <div className="ins__des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid in accusamus dolores repudiandae
                    reiciendis, modi possimus sapiente iusto sit dolor veritatis error dolorum deleniti quos suscipit,
                    saepe maxime quis nisi!
                </div>
            </div>
        </div>
    )
}