import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./features/Home";
import CoursePage from "./pages/Course";
import "antd/dist/antd.css";
import LessonPage from "./features/Lesson";
import LoginPage from "./pages/Auth/Login";
import {refresh, me} from "./services/authService";
import {useDispatch} from "react-redux";
import {setLoggedIn} from "./slice/authSlice";
import Loading from "react-fullscreen-loading";
import styled from 'styled-components';
import {createBrowserHistory} from "history";
import CourseDetail from "./features/CourseDetail";
import Cart from "./features/Cart";
import {fetchAPIGetCart} from "./features/Cart/slice/cartSlice";
import ScrollToTop from "./hooks/scrollToTop";

const LoadingWrapper = styled.div`
  z-index: 1000;
  position: fixed;
`

const history = createBrowserHistory();


function App() {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        me()
            .then(response => {
                dispatch(setLoggedIn({
                    token: localStorage.getItem('user_token'),
                    user: response.data,
                }))
                setIsLoading(false);

                dispatch(fetchAPIGetCart());


            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });

    }, [])

    return (
        <div>

            <Router history={history}>
                <LoadingWrapper>
                    <Loading loading={isLoading} background="#2ecc71" loaderColor="#3498db"/>;
                </LoadingWrapper>

                <Switch>

                    <Route exact path='/' component={Home}/>
                    <Route path='/courses' component={CoursePage}/>
                    <Route path='/course/:course' exact >
                        <ScrollToTop/>
                        <CourseDetail/>
                    </Route>
                    <Route path='/course/:course/learn/:lesson' component={LessonPage}/>
                    <Route path='/auth/login' component={LoginPage}/>
                    <Route path='/cart' component={Cart}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
