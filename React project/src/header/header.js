import './header.css';
import Navigation from "./navigation/navigation";
import AuthorizationHeader from "./authorizationHeader/authorizationHeader";

function Header (props) {
    if (!props.letIn) {
    return (
        <header className={'header'}>
            <AuthorizationHeader/>
            {/*<Navigation/>*/}
        </header>
    )} else {
        return (
            <header className={'header'}>
                <Navigation/>
            </header>
        )
    }
}

export default Header;