import ProductGallery from '../components/products/ProductGallery/ProductGallery'
const Products = ({productList}) => {
  return (
    <div>
      
      <ProductGallery products={productList}/>
    </div>
  )
}

export default Products
