import './mediaPage.css';

function mediaPage () {
    return (
        <div className={'media-page'}>
            <h2>Танцевальные видео</h2>
            <div className={'media-page__medias-container'}>
                <div className={'media-page__media-item'}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xxc_J1FsVyg"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className={'media-page__media-item'}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/etaOzZlbj9s"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default mediaPage;