import data from "../data.json"


const Carousel = () => {


    let prevAction = (leftPosition, slickWidth, track) => {
        if (leftPosition > 0) {
            console.log("entro 2")
            track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
        }
    }

    let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
        if (leftPosition < (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
        }
    }

    

    const processingButton = (e) => {
        const btn = e.currentTarget
        const slickList = e.currentTarget.parentNode
        const track = e.currentTarget.parentNode.querySelector('#track')
        const slick = track.querySelectorAll('.slick')

        const slickWidth = slick[0].offsetWidth

        const trackWidth = track.offsetWidth;
        const listWidth = slickList.offsetWidth;

        let leftPosition

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

        btn.dataset.button == "button-prev" ? prevAction(leftPosition, slickWidth, track) : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track)

        console.log(track.style.left)

    }


    return (
        <div className="Carousel">

            <div className="slick-list" id="slick-list">

                <button className="slick-arrow slick-prev" id="button-prev" data-button="button-prev" onClick={e => processingButton(e)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
                </button>

                <div className="slick-track" id="track">

                    {
                        data.map(product => {
                            return (
                                <div className="slick" key={product.id}>
                                    <div>
                                        <a href="/">

                                            <picture>
                                                <img src={product.image} alt="Image" />
                                            </picture>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }





                </div>

                <button className="slick-arrow slick-next" id="button-next" data-button="button-next" onClick={e => processingButton(e)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
                </button>

            </div>

            <div className="slick-list" id="slick-list">

                <button className="slick-arrow slick-prev" id="button-prev" data-button="button-prev" onClick={e => processingButton(e)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" /></svg>
                </button>

                <div className="slick-track" id="track">

                    {
                        data.map(product => {
                            return (
                                <div className="slick" key={product.id}>
                                    <div>
                                        <a href="/">

                                            <picture>
                                                <img src={product.image} alt="Image" />
                                            </picture>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

                <button className="slick-arrow slick-next" id="button-next" data-button="button-next" onClick={e => processingButton(e)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
                </button>

            </div>
        </div>

    )
}

export default Carousel