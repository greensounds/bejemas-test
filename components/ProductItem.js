import React from 'react';
import Image from 'next/image'
import styles from '@/styles/ProductItem.module.css'
import { API_URL } from '@/config/index'  

const ProductItem = ({product}) => {
    return (
        <div className={styles.productWrap}>
            {product.bestseller ? <span className={styles.bestsellerLabel}>{product.bestseller ? 'Best Seller' : null}</span> : null}
            <Image className={styles.productImg} src={product.image ? `${API_URL}${product.image.formats.small.url}` : ''} width={280} height={400} />
            <span className={styles.categoryLabel}>{product.category}</span>
            <h2>{product.name}</h2>
            <span className={styles.priceLabel}>${product.price}</span>
            <button className={styles.addBtn} type="button">Add to cart</button>
        </div>
    );
};

export default ProductItem;