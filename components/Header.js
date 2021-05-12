import Image from 'next/image'

import React from 'react';

const Header = ({totalCount}) => {
    return (
        <>
            <header>
                <Image src='/images/logo.png' width={159} height={26} />
                <div className="cart-container">
                    <Image src='/images/cart.png' width={54} height={39} />
                    { totalCount === 0 ? '' : (<span className="totalCount">{totalCount}</span>)}
                </div>
            </header>
        </>
    );
};

export default Header;