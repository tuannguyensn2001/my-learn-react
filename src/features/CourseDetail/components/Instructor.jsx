import React from "react";
import Layout from "../../../components/Layout";
import styled from 'styled-components';
import styles from './style.module.css';
import useLocalization from '../../../hooks/useLocalization';

const insInfoClass = styles['ins__info'];
const overviewClass = styles['ins__overview'];

const Instructor = styled.div`
    margin-top: 36px;
    padding: 0;
`

const InsTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
`

const InsCover = styled.div`
    padding-top: 12px;
`

const InsName = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: #5624d0;
`

const InsPos = styled.div`
    font-size: 1rem;
    text-indent: 16px;
`

const InsInfo = styled.div`
    display: flex;
    margin-top: .5rem;
`
const InsPicture = styled.img`
    border-radius: 50%;
    width: 120px;
`

const InsOverview = styled.div`
    text-transform: capitalize;
    margin-left: 28px;
    font-size: 1rem;
`

const OverviewInfo = styled.div`
    line-height: 30px;
`

const OverviewIcon = styled.i`
    color: #e59819;
    width: 32px;
`

const InsDes = styled.div`
    margin-top: 8px;
    text-indent: 16px;
    padding-bottom: 64px;
`

export default () => {

    const {trans} = useLocalization();

    return(
        <Instructor className="instructor container col-xl-6 offset-xl-1 col-lg-9 col-md-10 col-sm-10">
            <InsTitle className="ins__title">{trans('courseDetailInstructor.title')}</InsTitle>
            <InsCover className="ins__cover">
                <div className="ins__name-cover">
                    <InsName className="ins__name">Jose Portilla</InsName>
                    <InsPos className="ins__pos">Mô tả ngắn</InsPos>
                </div>
                <InsInfo className={insInfoClass}>
                    {/* Put picture here (height == width) */}
                    <InsPicture className="ins__picture"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEVCwPs5vvue3v2o4v205v6/6v7K7f7V8f6h3/3i9f4xvPsouvuY3f39/v/1+//q+P+45/5GFGvPAAABa0lEQVR4nO3dSU7DABBFQWdwBidA7n9avGABYkEUKQplvzrBf/uWenh7/zgfj8fDbJztv+x+Om0fddr9aX+P23iPwy/nYbxM323+q+kxl+swTsOSbbYrKLwtvnC/efWIp6rQV6GvQl+Fvgp9Ffrmwl2Ftgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfKgq3Fdoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6FtF4Wnxhcu/GKoQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb5VfGGpEFehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoW8uHKdXj3iqCn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9FfrmwkOFtgp9Ffoq9FXoq9BXoa9C3zoKL5slm67D+bpdsuvhE57nEnPutj/JAAAAAElFTkSuQmCC"
                         alt="Teacher A"/>
                    <InsOverview className={overviewClass}>
                        <OverviewInfo className="overview__info"><OverviewIcon className="overview__icon fas fa-star"></OverviewIcon>Kinh nghiệm 1
                        </OverviewInfo>
                        <OverviewInfo className="overview__info"><OverviewIcon className="overview__icon fas fa-medal"></OverviewIcon>Kinh nghiệm 2
                        </OverviewInfo>
                        <OverviewInfo className="overview__info"><OverviewIcon className="overview__icon fas fa-user"></OverviewIcon>Kinh nghiệm 3
                        </OverviewInfo>
                        <OverviewInfo className="overview__info"><OverviewIcon className="overview__icon fas fa-play-circle"></OverviewIcon>Kinh nghiệm 4
                        </OverviewInfo>
                    </InsOverview>
                </InsInfo>
                <InsDes className="ins__des">
                    Mô tả chi tiết
                </InsDes>
            </InsCover>
        </Instructor>
    )
}