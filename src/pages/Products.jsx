import ProductGallery from '../components/products/ProductGallery/ProductGallery'
const Products = ({productList, setCartList}) => {
  return (
    <div>
      
      <ProductGallery products={productList} setCartList={setCartList}/>
    </div>
  )
}

export default Products
