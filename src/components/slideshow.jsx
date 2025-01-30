import { useEffect, useState } from 'react';
import './slideshow.css';
export const Slideshow = () => {
    // let slideIndex = 1;
    let [slideIndex, setslideIndex] = useState(1);
    
    useEffect(()=>{
        let timeoutId;
        timeoutId=setTimeout(()=>{
            showSlides(slideIndex);
        },1000)
        return () => clearTimeout(timeoutId);
    },[])
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {
            // slideIndex = 1
            setslideIndex(1)
        }
        if (n < 1) {
            // slideIndex = slides.length
            setslideIndex(slides.length);
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
    return (
        <div className="container">
            <div className="mySlides">
                <div className="numbertext">1 / 6</div>
                <img src="1.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">2 / 6</div>
                <img src="Hiyori.png" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">3 / 6</div>
                <img src="Komi.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">4 / 6</div>
                <img src="suika.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">5 / 6</div>
                <img src="Yor.jpg" style={{ width: '100%' }} />
            </div>
            {/* <a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={()=>plusSlides(1)}>&#10095;</a> */}

            <div className="caption-container">
                <p id="caption"></p>
            </div>

            <div className="row">
                <div className="column">
                    <img className="demo cursor" src="1.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(1)} alt="The Woods" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="Hiyori.png" style={{ width: '100%' }} onClick={()=>currentSlide(2)} alt="Cinque Terre" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="Komi.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(3)} alt="Mountains and fjords" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="suika.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(4)} alt="Northern Lights" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="Yor.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(5)} alt="Nature and sunrise" />
                </div>
            </div>
        </div>
    )
}