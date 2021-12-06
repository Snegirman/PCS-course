import React from "react";
import './StartScreen.css';

function StartScreen () {
    return(
        <div>
            <div className={'startScreen'}>
                <div className={'startScreen__logo'}>
                    Волнения в народе
                </div>
                <div className={'startScreen__scroll_down'}>
                    Прокрутите ниже
                </div>
            </div>
        </div>
    )
}

export default StartScreen;