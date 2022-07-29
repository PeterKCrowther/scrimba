import React from "react";
import carouselImg1 from "../images/carousel_1.png";
import carouselImg2 from "../images/carousel_2.png";
import carouselImg3 from "../images/carousel_3.png";
import star from "../images/star.png";

const slider = [
    {
        label: "SOLD OUT",
        imgsrc: carouselImg1,
        rating: "5.0",
        numberOfRatings: "6",
        location: "USA",
        text: "Life lessons with Katie Zaferes",
        pricePrefix: "From ",
        priceCurrencey: "$",
        price: "136",
        priceUnit: "person",
    },
    {
        label: "ONLINE",
        imgsrc: carouselImg2,
        rating: "5.0",
        numberOfRatings: "30",
        location: "USA",
        text: "Learn wedding photography",
        pricePrefix: "From ",
        priceCurrencey: "$",
        price: "125",
        priceUnit: "person",
    },
    {
        label: "",
        imgsrc: carouselImg3,
        rating: "4.8",
        numberOfRatings: "2",
        location: "USA",
        text: "Group Mountain Biking",
        pricePrefix: "From ",
        priceCurrencey: "$",
        price: "50",
        priceUnit: "person",
    }
];

function PromoSlider() {

    let theList = () => { 
        let myStuff = Object.keys(slider).map(function(key) {

            let promoLabel = "";
            if ( slider[key].label !== "") { promoLabel = (<div className="label">{slider[key].label}</div>) };
  
            return (
                <li key={key.toString()} className={"item-".concat(key)}>
                    <div className="img--cont">
                        <img src={slider[key].imgsrc} alt={"carousel item ".concat(key)} className={"item-".concat(key)} />
                        {promoLabel}
                    </div>
                    <div className="ratings--cont">
                        <div><img src={star} alt="ratings star" className="star" /> {slider[key].rating} ({slider[key].numberOfRatings}) {slider[key].location}</div>
                        <div>{slider[key].text}</div>
                        <div className="pricing">{slider[key].pricePrefix} {slider[key].priceCurrencey}{slider[key].price} / {slider[key].priceUnit}</div>
                    </div>
                </li>

            );
        });

        return myStuff;
    };

    return (
        <div className="carousel">
            <ul>
                {theList()}
            </ul>        
        </div>
    );
    
}

export default PromoSlider;