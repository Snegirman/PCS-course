
function EventNote (props) {
    return (
        <div className={'soon-events-page__event-container'}>
            <div className={'soon-events-page__img-container'}>
                <img alt={'event logo'} src={props.img}/>
            </div>
            <div className={'soon-events-page__value-container'}>
                <div className={'soon-events-page__name'}>Event name:</div>
                <div className={'soon-events-page__value'}>{props.name}</div>
            </div>
            <div className={'soon-events-page__value-container'}>
                <div className={'soon-events-page__date'}>Date:</div>
                <div className={'soon-events-page__value'}>{props.date}r</div>
            </div>
            <div className={'soon-events-page__value-container'}>
                <div className={'soon-events-page__location'}>Location:</div>
                <div className={'soon-events-page__value'}>{props.location}</div>
            </div>
        </div>
    )
}

export default EventNote;