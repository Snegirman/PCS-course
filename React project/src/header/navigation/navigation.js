import React from "react";
import './navigation.css';
import {Link} from "react-router-dom";

function Navigation () {
    return (
        <nav className={'header__nav'} id={'header__nav'}>
            <Link to={'roadmap'}>Roadmap</Link>
            <Link to={'media'}>Медиа</Link>
            <Link to={'soonEvents'}>Ближайшие мероприятия</Link>
            <Link to={'dancers'}>Личности</Link>
            <Link to={'reviews'}>Отзывы</Link>
        </nav>
    )
}

export default Navigation;