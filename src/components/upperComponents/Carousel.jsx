import React, { useState, useEffect } from 'react';
import CarouselCSS from '../upperComponents/Carousel.module.css'
import rightArrow from '../images/arrow-right-yellow.png'

function Carousel() {

    const Images = [
        { id: 0, content: 1, color: '#7bdf78', title: 'Título 1'},
        { id: 1, content: 2, color: '#df78d1', title: 'Título 2' },
        { id: 2, content: 3, color: '#77dfe0', title: 'Título 3' },
        { id: 3, content: 4, color: '#6e93d4', title: 'Título 4' },
        { id: 4, content: 5, color: '#c23e3e', title: 'Título 5' }
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
            <a onClick={() => previoustImage(currentImage.id)} className={CarouselCSS.arrowColumn}>
                <img style={{transform: 'rotate(180deg)'}} src={rightArrow} alt="" />
            </a>

            <div className={CarouselCSS.firstHalf}>
                <p className={CarouselCSS.title}>
                    {currentImage.title}
                </p>
                <p className={CarouselCSS.mainText}>
                    Eligendi sunt similique pariatur recusandae et vel quo nam consectetur eos eaque adipisci aliquid nihil
                    magni
                    odit vitae exercitationem dicta fugit doloribus asperiores, est alias! Corrupti doloremque voluptatum
                    maiores
                    distinctio!
                </p>

                <div className={CarouselCSS.bottomBtns}>

                    <div className={CarouselCSS.carouselBtn}>
                        {Images.map((item, index) => <button onClick={() => setCurrentImage(Images[index])}></button>)}
                    </div>

                    <div className={CarouselCSS.doubleBtn}>
                        <button>+</button>
                        <button>Notícias</button>
                    </div>

                </div>
            </div>


            <div className={CarouselCSS.fakeImage} style={{ background: currentImage.color }}>
                {currentImage.content}
            </div>

            <a onClick={() => nextImage(currentImage.id)} className={CarouselCSS.arrowColumn}>
            <img src={rightArrow} alt="" />
            </a>
        </div>
    )
}

export default Carousel
