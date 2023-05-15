import React, { useState } from "react";
import '../company-info-component/company-info-component.css'
import logo from '../../../images/logo.png'
import stoneColumnImg from '../../../images/stoneColumn.png'
import driveway from '../../../images/driveway.png'
import foundations from '../../../images/foundations.png'
import walkways from '../../../images/walkways.png'
import patio from '../../../images/patio.png'
import Form from "../../form-component/form.js";
export default function CompanyInfoComponent() {
    const [showForm, setShowForm] = useState(false);


    function signUp(change) {
        setShowForm(change);
        console.log(change)
        window.scrollTo({
            top: 50,
            behavior: 'smooth',
        });
    }
    
   
    return (
        <div className="main">
            <img className="logo" src={logo} alt="logo" />
            <h3 className="number">(111) 222-3333</h3>
            {showForm ? <Form signUp={signUp} /> : null}
            <div className="line"></div>
            <h1> Top-Rated Louisville <br />Concrete Contractors</h1>
            <div>
                <button onClick={signUp} ><strong>GET FREE ESTIMATE</strong><p className="limitedDiscount">+ Limited Time Discount!</p></button>
            </div>
            <div>
                <h2>Local Experts Serving Indianapolis And The Surrounding Areas</h2>
            </div>
            <div className="seeHowTransformCard">
                <h2 className="seeHowTransformQuote"><strong>See How Easily You Can Transform your <br /> Property With Our Expert Concrete Services!</strong></h2>
                <div className="grid-container">
                    <div className="grid-child">
                        <div className="competativePricingContainer">
                            <p className="competativePricingPara">Discover Our Competitive Pricing for Quality Concrete Services</p>
                            <div className="paraLine"></div>
                            <ul className="special_bullet">
                                <li>Expert concrete contractors</li>
                                <li>No hidden fees or charges</li>
                                <li>Concrete installation and repair</li>
                                <li>High customer satisfaction</li>
                                <li>Residential and commercial</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-child">
                        <img className="stoneclmn" src={stoneColumnImg} alt="stonclmnimg" />
                        <button onClick={signUp} ><strong>GET FREE ESTIMATE</strong><p className="less5Minutes">Takes less than 5 Minutes!</p></button>
                    </div>
                </div>

            </div>
            <div className="purpleSection">
                <h1 className="ph1"> In Need Of Professional Concrete Services In Louisville?</h1>
                <p className="pp">Our goal is to go above and beyond our customer's expectations. We offer several concrete services including the following</p>
            </div>
            <div className="cardServices">
                <div className="cardItem">
                    <div className="grid-container">
                        <div className="grid-child">
                            <h2 className="cardItemH1"> DriveWays</h2>
                            <p className="cardItemP">A new concrete driveway can improve your home's aesthetics, safety, and value. It is a durable, low-maintenance, and cost-effective investment that provides a smooth and level surface. Contact us today to learn more.</p>
                        </div>
                        <div className="grid-child">
                            <img className="cardItemPicD" src={driveway} alt="driveway" />
                        </div>
                    </div>
                </div>
                <div className="cardItem">
                    <div className="grid-container">
                        <div className="grid-child">
                            <img className="cardItemPicP" src={patio} alt="patio" />
                        </div>
                        <div className="grid-child">
                            <h2 className="cardItemH1"> Patios</h2>
                            <p className="cardItemP">A new concrete patio is a low-maintenance, durable, and stylish addition to your outdoor space. It can increase your property's value, offer a comfortable space for relaxation and entertainment, and enhance your home's curb appeal. Contact us today to learn more.</p>
                        </div>
                    </div>
                </div>
                <div className="cardItem">
                    <div className="grid-container">
                        <div className="grid-child">
                            <h2 className="cardItemH1"> Walkways</h2>
                            <p className="cardItemP">A new concrete walkway can improve your property's safety, curb appeal, and functionality. It's a low-maintenance and long-lasting investment that adds a stylish touch to your outdoor space. Contact us today to learn more.</p>
                        </div>
                        <div className="grid-child">
                            <img className="cardItemPicW" src={walkways} alt="walkways" />
                        </div>
                    </div>
                </div>
                <div className="cardItem">
                    <div className="grid-container">
                        <div className="grid-child">
                            <img className="cardItemPicF" src={foundations} alt="foundation" />
                        </div>
                        <div className="grid-child">
                            <h2 className="cardItemH1 foundation"> Foundations </h2>
                            <p className="cardItemP">Repairing your concrete foundation is crucial to maintaining your property's structural integrity and value. It enhances safety and stability and can save you money in the long run. Contact us today to learn more.</p>
                        </div>

                    </div>
                </div>
                <div className="cardItem">
                    <div className="grid-container-bottom">
                        <div className="grid-child">
                            <h2 className="cardItemH1"> And more...</h2>
                        </div>
                        <div className="grid-child">
                            <button className="bottomBtn" onClick={signUp} ><strong>Contact Us Today For A Free Quote!</strong></button>
                        </div>
                    </div>
                </div>

                <div className="purpleSection">
                    <h1 className="ph1 cardItembtm"> <strong>About Us</strong></h1>
                </div>
                <div className="cardItem cardItembtm">
                    <div className="grid-container purpleSection">
                        <div className="grid-child p pp">

                            <p className=" w">With us, you can expect reliable and quality services that will exceed your expectations.

                                Our services include a wide range of concrete solutions such as concrete installation, repair, resurfacing, demolition, and removal.

                                Whether you need a new concrete driveway, patio, or foundation, we have got you covered. Our team is equipped with the latest tools and techniques to ensure that your concrete project is done to perfection.

                                We understand that every client has unique needs and preferences, and that's why we offer personalized services tailored to meet your specific requirements. We work closely with you to understand your vision and provide customized solutions that suit your style and budget.</p>
                        </div>
                        <div className="grid-child p" >
                            <img className="cardItemPic" src={walkways} alt="walkways" />
                        </div>
                    </div>
                </div>
                <div className="purpleSection cardItembtm">
                    <h1 className="ph1 cardItembtm"> In Need Of Professional Concrete Services In Louisville?</h1>
                    <p className="pp">Our goal is to go above and beyond our customer's expectations. We offer several concrete services including the following</p>
                </div>


            </div>

        </div>
    )
}