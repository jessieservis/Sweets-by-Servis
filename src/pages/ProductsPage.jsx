import './ProductsPage.css';

function ProductsPage() {
  return (
    <div className="products-page">
      <section className="products-hero-section">
        <div className="products-hero-container">
          <h1>Discover Our Products</h1>
          <div className="category-tabs">
            <button className="tab-btn active">Cookies</button>
            <button className="tab-btn">Waffles</button>
            <button className="tab-btn">Macaroons</button>
            <button className="tab-btn">Cakes</button>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="category-container">
          <h2>Cookies</h2>
          <div className="products-display">
            <div className="product-image-large">
              <img src="https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Chocolate chip cookies" />
              <div className="product-label">
                <h3>Lemon Balms</h3>
                <button className="btn-product">Add to cart</button>
              </div>
            </div>
            <div className="product-image-large">
              <img src="https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cookies on cooling rack" />
              <div className="product-label">
                <h3>Lemon Balms</h3>
                <button className="btn-product">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section alt-bg">
        <div className="category-container">
          <h2>Limited Edition</h2>
          <div className="product-single">
            <img src="https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Limited edition dessert" />
            <div className="product-label">
              <h3>Lemon Balms</h3>
              <button className="btn-product">Add to cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="category-container">
          <h2>Waffles</h2>
          <div className="product-single">
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Waffles with honey" />
            <div className="product-label">
              <h3>Lemon Balms</h3>
              <button className="btn-product">Add to cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section alt-bg">
        <div className="category-container">
          <h2>Macaroons</h2>
          <div className="products-display">
            <div className="product-image-large">
              <img src="https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Macaroons on plate" />
              <div className="product-label">
                <h3>Lemon Spasm</h3>
                <button className="btn-product">Add to cart</button>
              </div>
            </div>
            <div className="product-image-large">
              <img src="https://images.pexels.com/photos/853005/pexels-photo-853005.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Colorful macaroons" />
              <div className="product-label">
                <h3>Lemon Balms</h3>
                <button className="btn-product">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="product-single" style={{marginTop: '32px'}}>
            <img src="https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Macaroons assortment" />
            <div className="product-label">
              <h3>Lemon Balms</h3>
              <button className="btn-product">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
