import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };

    static getDerivedStateFromProps({media}) {
        let photos = [];

        if(media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(photo => photo['@size'] === 'pn');
        }

        return { photos };
    }

    handleIndexClick = (event) => {
        this.setState({
            active: +event.target.dataset.index
        });
    };

    render() {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active].value} alt="primary planet" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img onClick={this.handleIndexClick} key={photo.value} src={photo.value}
                             className={index === active ? 'active' : ''}
                             alt="planet thumbnail" data-index={index}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;
