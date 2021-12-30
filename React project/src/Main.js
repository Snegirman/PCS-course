import './Main.css';
import Header from "./header/header";
import AuthorizationPage from "./authorizationPage/authorizationPage";
import React, {useState} from "react";
import {Routes, Route, Outlet} from "react-router";
import RoadmapPage from "./roadmapPage/roadmapPage";
import MediaPage from "./mediaPage/mediaPage";
import StartScreen from "./startScreen/StartScreen";
import SoonEventsPage from "./soonEventsPage/soonEventsPage";
import DancersPage from "./dancersPage/dancersPage";
import ReviewsPage from "./reviewsPage/reviewsPage";
let letIn, setLetIn;

function Main() {
    [letIn, setLetIn] = useState(false);
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<AuthorizationPage setLetIn={val => setLetIn(val)}/>}/>
                <Route path={'roadmap'} element={<RoadmapPage/>}/>
                <Route path={'media'} element={<MediaPage/>}/>
                <Route path={'soonEvents'} element={<SoonEventsPage/>}/>
                <Route path={'dancers'} element={<DancersPage/>}/>
                <Route path={'reviews'} element={<ReviewsPage/>}/>
            </Route>
        </Routes>
    )
}

function Layout () {
    if (letIn === false) {
        return (
            <div className="Main">
                <StartScreen/>
                <Header setLetIn={val => setLetIn(val)} letIn={letIn}/>
                <AuthorizationPage setLetIn={val => setLetIn(val)}/>
            </div>
        )
    }
    return (
            <div className="Main">
                <Header setLetIn={val => setLetIn(val)} letIn={letIn}/>
                <Outlet/>
            </div>
    );
}

export default Main;
