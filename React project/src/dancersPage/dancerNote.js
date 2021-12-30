function DancerNote (props) {
    return (
        <div className={'dancer-page__note-container'}>
            <h3>{props.name}</h3>
            <div className={'dancer-page__social-links'}>
                <div className={'dancer-page__social-network-name'}>Instagram:</div>
                <a target={'_blank'} rel={'noopener nofollow noreferrer'} href={`https://${props.instagram}`} className={'dancer-page__social-network-link'}>{props.instagram}</a>
            </div>
            <div className={'dancer-page__social-links'}>
                <div className={'dancer-page__social-network-name'}>VK:</div>
                <a target={'_blank'} rel={'noopener nofollow noreferrer'} href={`https://${props.vk}`} className={'dancer-page__social-network-link'}>{props.vk}</a>
            </div>
            <div className={'dancer-page__social-links'}>
                <div className={'dancer-page__social-network-name'}>Facebook:</div>
                <a target={'_blank'} rel={'noopener nofollow noreferrer'} href={`https://${props.facebook}`} className={'dancer-page__social-network-link'}>{props.facebook}</a>
            </div>
        </div>
    )
}

export default DancerNote;