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
                <div className="numbertext">1 / 5</div>
                <img src="certi1.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">2 / 5</div>
                <img src="certi2.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">3 / 5</div>
                <img src="certi3.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">4 / 5</div>
                <img src="certi4.jpg" style={{ width: '100%' }} />
            </div>

            <div className="mySlides">
                <div className="numbertext">5 / 5</div>
                <img src="certi5.jpg" style={{ width: '100%' }} />
            </div>
            {/* <a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={()=>plusSlides(1)}>&#10095;</a> */}

            <div className="caption-container">
                <p id="caption"></p>
            </div>

            <div className="row">
                <div className="column">
                    <img className="demo cursor" src="certi1.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(1)} alt="Introduction to Networks" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="certi2.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(2)} alt="Introduction to c++" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="certi3.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(3)} alt="The hour of code" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="certi4.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(4)} alt="Cyber security essentials" />
                </div>
                <div className="column">
                    <img className="demo cursor" src="certi5.jpg" style={{ width: '100%' }} onClick={()=>currentSlide(5)} alt="Python essentials" />
                </div>
            </div>
        </div>
    )
}