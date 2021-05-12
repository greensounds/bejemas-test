import React from 'react';
import Image from 'next/image'

const MainContent = () => {
    return (
        <>
            <div className="mainContent">
                <div className="mainContentTop">
                    <h2>Samurai King Resting</h2>
                    <button className="addToCartTop">Add to Cart</button>
                </div>
                <div className="imgWrap">
                    <Image src='/images/doggo.jpg' width={1290} height={553} />
                    <span>Photo of the Day</span>
                </div>
                <div className="infoWrap">
                    <div className="aboutWrap">
                        <h3>About the Samurai King Resting</h3>
                        <span>Pets</span>
                        <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
                    </div>
                    <div className="alsoWrap">
                        <span>People also buy</span>
                        <div className="alsoWrapImgCont">
                            <div className="alsoWrapImg">
                                <Image src='/images/beach-hat.jpg' width={117} height={147} />
                            </div>
                            <div className="alsoWrapImg">
                                <Image src='/images/blue-hat.jpg' width={117} height={147} />
                            </div>
                            <div className="alsoWrapImg">
                                <Image src='/images/casual-watch.jpg' width={117} height={147} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;