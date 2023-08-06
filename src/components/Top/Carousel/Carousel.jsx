import React, { useState, useEffect } from 'react';
import CarouselCSS from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function Carousel() {
    const Images = [
        { id: 0, content: 1, color: '#7bdf78', title: 'Título 1', main: 'Texto um Texto um Texto 1 Texto 1' },
        { id: 1, content: 2, color: '#df78d1', title: 'Título 2', main: 'Texto dois Texto dois Texto 2 Texto 2' },
        { id: 2, content: 3, color: '#77dfe0', title: 'Título 3', main: 'Texto tres Texto tres Texto 3 Texto 3' },
        { id: 3, content: 4, color: '#6e93d4', title: 'Título 4', main: 'Texto quatro Texto quatro Texto 4 Texto 4' },
        { id: 4, content: 5, color: '#c23e3e', title: 'Título 5', main: 'Texto cinco Texto cinco Texto 5 Texto 5' }
    ]

    let [currentImage, setCurrentImage] = useState(Images[0]);

    function nextImage(id) {
        id < 4 ? setCurrentImage(Images[id += 1]) : id = setCurrentImage(Images[0])
    }

    function previoustImage(id) {
        id > 0 ? setCurrentImage(Images[id -= 1]) : id = setCurrentImage(Images[4])
    }

    useEffect(() => {
        const id = setInterval(() => {
            nextImage(currentImage.id)
        }, 6000);
        return () => {
            clearTimeout(id)
        }
    })

    return (
        <div className={CarouselCSS.mainCarousel}>

            <a onClick={() => previoustImage(currentImage.id)} className={CarouselCSS.arrowColumn}
                id={CarouselCSS.left}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a onClick={() => nextImage(currentImage.id)} className={CarouselCSS.arrowColumn}
                id={CarouselCSS.right}>
                <FontAwesomeIcon icon={faChevronRight} />
            </a>

            <div className={CarouselCSS.column} id={CarouselCSS.firstColumn}>

                <SwitchTransition>
                    <CSSTransition key={currentImage.title} timeout={0}>
                        <p className={CarouselCSS.title}>
                            {currentImage.title}
                        </p>
                    </CSSTransition>
                </SwitchTransition>

                <SwitchTransition>
                    <CSSTransition key={currentImage.main} timeout={0}>
                        <p className={CarouselCSS.mainText}>
                            {currentImage.main}
                        </p>
                    </CSSTransition>
                </SwitchTransition>

                <div className={CarouselCSS.bottomBtns}>
                    <div className={CarouselCSS.carouselBtn}>
                        {Images.map((item, index) => <button style={{ background: currentImage.id == item.id ? 'white' : '' }} key={item.id} onClick={() => setCurrentImage(Images[index])}></button>)}
                    </div>

                    <div className={CarouselCSS.doubleBtn}>
                        <button>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button>Notícias</button>
                    </div>
                </div>

            </div>

            <div className={CarouselCSS.column}>
                <SwitchTransition>
                    <CSSTransition key={currentImage.content} timeout={0}>
                        <div className={CarouselCSS.fakeImage} style={{ background: currentImage.color }}>
                            {currentImage.content}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    )
}

export default Carousel
