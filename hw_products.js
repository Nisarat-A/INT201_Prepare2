function ProductManagement() {
    let products = 
    []
  
    function getAllProducts() {
      return products
    }
  
    function addProduct(product) {
      products.push(product)
      return products
    }
  
    function searchByName(name) {
      return products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
    }
  
    function searchByPriceRange(minPrice, maxPrice) {
      return products.filter((product) => product.price>=minPrice && product.price<=maxPrice)
    }
  
    function removeAll() {
      return products.splice(0, products.length)
    }
  
    return {
      removeAll,
      searchByName,
      searchByPriceRange,
      getAllProducts,
      addProduct
    }
  }
  module.exports = ProductManagement
  const productCatalog = ProductManagement()
  const newValue = {id: 2, name: 'mac', category: 'Electronics', price: 999.99 }
  // console.log(productCatalog.getAllProducts())
  // console.log(productCatalog.searchByName('m'))
  console.log(productCatalog.searchByPriceRange(100,1000));
  console.log(productCatalog.getAllProducts())
  console.log(productCatalog.addProduct(newValue))
  console.log(productCatalog.removeAll());
  console.log(productCatalog.getAllProducts())