import { API_URL } from '@/config/index' 
import Header from '@/components/Header' 
import MainContent from '@/components/MainContent' 
import ProductItem from '@/components/ProductItem'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import Image from 'next/image'

//export default function Home({products, page, total}) {
  export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState('name');
  const [totalCount, setTotalCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [filter, setFilter] = useState(false);
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    const fetchProducts = async () => {
      const productRes = await fetch(`${API_URL}/products`)
      const myProducts = await productRes.json()
      setProducts(...products, myProducts)
    }
    fetchProducts();
  }, [])

  //Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)


  const sortItem = async (e) => {
    const res = await fetch(`${API_URL}/products?_sort=${e.target.value}:ASC`)
    const productSort = await res.json();
    setProducts(productSort)
    setCurrentItem(e.target.value);
  }

  const sortByOption = async (currentItem, sortItemBy) => {
    const res = await fetch(`${API_URL}/products?_sort=${currentItem}:${sortItemBy}`)
    const productSort = await res.json()
    setProducts(productSort)
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginatePrev = (pageNumber) => setCurrentPage(pageNumber - 1);
  const paginateNext = (pageNumber) => setCurrentPage(pageNumber + 1);

  const checkCategory = async (e) => {
    if(e.target.checked) {
      const res = await fetch(`${API_URL}/products?category=${e.target.value}`)
      const productSort = await res.json();
      setProducts(productSort)
      setCurrentItem(e.target.value);
    } 
  }

  const checkPrice = async (e) => {
    if(e.target.checked) {
      if(e.target.value === 'lower-20') {
        const res = await fetch(`${API_URL}/products?_where[price_gte]=0&[price_lte]=20`)
        const priceRes = await res.json();
        setProducts(priceRes)
      }
      else if (e.target.value === 'between-20-and-100') {
        const res = await fetch(`${API_URL}/products?_where[price_gte]=20&[price_lte]=100`)
        const priceRes = await res.json();
        setProducts(priceRes)
      } else if (e.target.value === 'between-100-and-200') {
        const res = await fetch(`${API_URL}/products?_where[price_gte]=100&[price_lte]=200`)
        const priceRes = await res.json();
        setProducts(priceRes)
      } else if (e.target.value === 'more-than-200') {
        const res = await fetch(`${API_URL}/products?_where[price_gte]=200`)
        const priceRes = await res.json();
        setProducts(priceRes)
      } 
    } 
    if(!e.target.checked) {
      const res = await fetch(`${API_URL}/products`)
      const priceRes = await res.json();
      setProducts(priceRes)
    }
  }

  const showFilter = () => {
    setFilter(!filter)
  }

  /*const handleCheckboxChange = (e) => {
    let newArray = [...categories, e.target.name];
    if (categories.includes(e.target.name)) {
      newArray = newArray.filter(cat => cat !== e.target.name);
    }
    setCategories(newArray);
  }*/

  return (
    <div className="container">
      <Header totalCount={totalCount} />
      <MainContent />
      <div className="productsSection">
        <div className="productsTop">
          <h2><span>Photography</span> / Premium Photos</h2>
          <div className="sortControls">
            <span onClick={() => sortByOption(currentItem,'ASC')}><Image src='/images/up.png' width={7} height={15} /></span>
            <span className="downArrow" onClick={() => sortByOption(currentItem,'DESC')}><Image src='/images/down.png' width={7} height={15} /></span>
            Sort By
            <select name="sort" className="customSelect" onChange={(e) => sortItem(e)}>
              <option value="name">Select one</option>
              <option value="price">Price</option>
              <option value="name">Alphabetically</option>
            </select>
          </div>
          <div className="filterImage" onClick={() => showFilter()}>
            <Image src="/images/filter.png" width={29} height={29} />
          </div>
        </div>
        <div className="productsBottom">
          <div className={ filter ? 'filterToogle': 'filtersSidebar'}>
            <h3>Category</h3>
            {/*<input
                type="checkbox"
                className="custom-control-input"
                id="hats"
                value="hats"
                onChange={(e) => handleCheckboxChange(e)}
            />Hats
            <input
                type="checkbox"
                className="custom-control-input"
                id="sneakers"
                value="sneakers"
                onChange={(e) => handleCheckboxChange(e)}
            />Sneakers*/}
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="hats" />Hats
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="boots" />Boots
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="headphones" />Headphones
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="sneakers" />Sneakers
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="shoes" />Shoes
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="glasses" />Glasses
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="backpacks" />Backpacks
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="sunglasses" />Sunglasses
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkCategory(e)} name="checkCategory" value="watches" />Watches
            </div>
            <h3 className="priceHeader">Price Range</h3>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkPrice(e)} name="price-range" value="lower-20" />Lower than $20
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkPrice(e)} name="price-range" value="between-20-and-100" />$20 - $100
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkPrice(e)} name="price-range" value="between-100-and-200" />$100 - $200
            </div>
            <div className="checkboxWrap">
              <input type="radio" onChange={(e) => checkPrice(e)} name="price-range" value="more-than-200" />More than $200
            </div>
          </div>
          <div className="productsWrap">
            { products.length === 0 && <h3>No products to show</h3> }
            <div className="productsGrid">
              {
                currentProducts.map((product) => (
                  <ProductItem product={product} key={product.name} />
                ))
              }
            </div>
            <Pagination 
              currentPage={currentPage} 
              paginate={paginate} 
              productsPerPage={productsPerPage} 
              totalProducts={products.length} 
              paginatePrev={paginatePrev}
              paginateNext={paginateNext}
            />
          </div>
        </div>
      </div>
    </div>
  )
}