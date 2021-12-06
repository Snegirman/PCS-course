import './Main.css';
import Header from "./header/header";
import Authorization from "./authorization/authorization";
import {useState} from "react";

function Main() {
    const [letIn, setLetIn] = useState(false);
      return (
        <div className="Main">
            <Header setLetIn={val => setLetIn(val)} letIn={letIn}/>
            <Authorization setLetIn={val => setLetIn(val)}/>
        </div>
      );
}

export default Main;
