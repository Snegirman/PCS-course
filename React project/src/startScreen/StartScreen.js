import React from "react";
import './StartScreen.css';

function StartScreen () {
    return(
        <div>
            <div className={'startScreen'}>
                <h1 className={'startScreen__logo'}>
                    Волнения в народе
                </h1>
                <div className={'startScreen__scroll_down'}>
                    Прокрутите ниже
                </div>
            </div>
        </div>
    )
}

export default StartScreen;