import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/Course";
import "antd/dist/antd.css";
import LessonPage from "./pages/Lesson";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/'  component={Home} />
            <Route path='/courses' component={CoursePage} />
            <Route path='/course/:course/learn/:lesson' component={LessonPage} />
        </Switch>
    </Router>
  );
}

export default App;
