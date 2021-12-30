import './dancersPage.css';
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addDancer, pushToLocal} from "../store/createSlice";
import DancerNote from "./dancerNote";
let dancerName, dancerInstagram, dancerVK, dancerFacebook;



function DancersPage () {
    const list = useSelector((state) => state.addDancer.value);
    const dispatch = useDispatch();

    function addNote (e) {
        e.preventDefault();
        let info = {
            name: dancerName.current.value,
            instagram: dancerInstagram.current.value,
            vk: dancerVK.current.value,
            facebook: dancerFacebook.current.value
        }
        dispatch(addDancer(info));
        dispatch(pushToLocal());

        dancerName.current.value = '';
        dancerInstagram.current.value = '';
        dancerVK.current.value = '';
        dancerFacebook.current.value = '';

    }

    dancerName = useRef(null);
    dancerInstagram = useRef(null);
    dancerVK = useRef(null);
    dancerFacebook = useRef(null);
    return (
        <div className={'dancers-page'}>
            <h2>Ссылки на социальные сети танцоров</h2>
                <form>
                    <div className={'dancer-page__input-container'}>
                        <label htmlFor={'dancer-name'}>Введите имя танцора:</label>
                        <input id={'dancer-name'} type={'text'} ref={dancerName}/>
                    </div>
                    <div className={'dancer-page__input-container'}>
                        <label htmlFor={'dancer-instagram'}>Введите ссылку на его страницу в instagram:</label>
                        <input id={'dancer-instagram'} type={'text'} ref={dancerInstagram}/>
                    </div>
                    <div className={'dancer-page__input-container'}>
                        <label htmlFor={'dancer-VK'}>Введите ссылку на его страницу в VK:</label>
                        <input id={'dancer-VK'} type={'text'} ref={dancerVK}/>
                    </div>
                    <div className={'dancer-page__input-container'}>
                        <label htmlFor={'dancer-facebook'}>Введите ссылку на его страницу в facebook:</label>
                        <input id={'dancer-facebook'} type={'text'} ref={dancerFacebook}/>
                    </div>
                    <div className={'dancersPage__button-wrapper'}>
                    <button onClick={addNote}>Внести запись</button>
                    </div>
                </form>
            <div className={'dancer-page__notes-container'}>
                <div className={'dancer-page__note-container'}>
                    <h3>Dancer Name</h3>
                    <div className={'dancer-page__social-links'}>
                        <div className={'dancer-page__social-network-name'}>Instagram:</div>
                        <a href={'https://google.com'} className={'dancer-page__social-network-link'}>Some link</a>
                    </div>
                    <div className={'dancer-page__social-links'}>
                        <div className={'dancer-page__social-network-name'}>VK:</div>
                        <a href={'https://google.com'} className={'dancer-page__social-network-link'}>Some link</a>
                    </div>
                    <div className={'dancer-page__social-links'}>
                        <div className={'dancer-page__social-network-name'}>Facebook:</div>
                        <a href={'https://google.com'} className={'dancer-page__social-network-link'}>Some link</a>
                    </div>
                </div>
                {list.map((item) => {
                    return (
                        <DancerNote key={item.name}
                                    name={item.name}
                                    instagram={item.instagram}
                                    vk={item.vk}
                                    facebook={item.facebook}/>
                    )
                })}
            </div>
        </div>
    )
}

export default DancersPage;