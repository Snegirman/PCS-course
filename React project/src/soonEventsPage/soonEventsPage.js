import './soonEventsPage.css';
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addEvent, pushToLocal} from "../store/createSliceEvent";
import EventNote from "./eventNote";
let eventImg, eventName, eventDate, eventLocation;



function SoonEventsPage () {
    const list = useSelector( (state) => state.addEvent.value)
    const dispatch = useDispatch();
    eventImg = useRef(null);
    eventName = useRef(null);
    eventDate = useRef(null);
    eventLocation = useRef(null);

    function addNote (e) {
        e.preventDefault();
        let info = {
            img: eventImg.current.value,
            name: eventName.current.value,
            date: eventDate.current.value,
            location: eventLocation.current.value
        }
        dispatch(addEvent(info));
        dispatch(pushToLocal());

        eventImg.current.value = '';
        eventName.current.value = '';
        eventDate.current.value = '';
        eventLocation.current.value = ''
    }

    return (
        <div className={'soon-events-page'}>
            <h2>Форма внесения мероприятия</h2>
            <form>
                <div className={'soon-events-page__input-container'}>
                    <label htmlFor={'event-img'}>Введите ссылку на афишу мероприятия:</label>
                    <input id={'event-img'} type={'text'} ref={eventImg}/>
                </div>
                <div className={'soon-events-page__input-container'}>
                    <label htmlFor={'event-name'}>Введите название мероприятия:</label>
                    <input id={'event-name'} type={'text'} ref={eventName}/>
                </div>
                <div className={'soon-events-page__input-container'}>
                    <label htmlFor={'event-date'}>Введите дату мероприятия:</label>
                    <input id={'event-date'} type={'text'} ref={eventDate}/>
                </div>
                <div className={'soon-events-page__input-container'}>
                    <label htmlFor={'event-location'}>В каком городе будет проходить мероприятие?</label>
                    <input id={'event-location'} type={'text'} ref={eventLocation}/>
                </div>
                <div className={'soon-events-page__button-wrapper'}>
                    <button onClick={addNote}>Внести запись</button>
                </div>
            </form>
            <h2>Список мероприятий</h2>
            <div className={'soon-events-page__container'}>
                <div className={'soon-events-page__event-container'}>
                    <div className={'soon-events-page__img-container'}>
                    <img alt={'event logo'} src={'https://sun9-41.userapi.com/impg/E4jFeZf7Fw6g-fcmNgaLKBwUDGwRR5HS3B3k5g/zgT-0LmzWH0.jpg?size=1728x2160&quality=95&sign=ed7f8bb0b585763a5fc49b4bccf2c49b&type=album'}/>
                    </div>
                    <div className={'soon-events-page__value-container'}>
                        <div className={'soon-events-page__name'}>Event name:</div>
                        <div className={'soon-events-page__value'}>Back to the future battle</div>
                    </div>
                    <div className={'soon-events-page__value-container'}>
                        <div className={'soon-events-page__date'}>Date:</div>
                        <div className={'soon-events-page__value'}>11 December</div>
                    </div>
                    <div className={'soon-events-page__value-container'}>
                        <div className={'soon-events-page__location'}>Location:</div>
                        <div className={'soon-events-page__value'}>Moscow</div>
                    </div>
                </div>
                {list.map((item) => {
                    return(
                        <EventNote img={item.img}
                                   name={item.name}
                                   date={item.date}
                                   location={item.location}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SoonEventsPage;