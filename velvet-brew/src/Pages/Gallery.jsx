import "./Gallery.css";

function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-heading">
        <p className="gallery-label">A TASTE OF VELVET</p>
        <h1>Our Gallery</h1>
        <p>
          Every cup, every detail, every moment.
          Welcome to our world of coffee.
        </p>
      </section>

      <section className="gallery-grid">
        <div className="gallery-item">
          <img
            src="/images/espresso.jpg"
            alt="Freshly brewed espresso"
          />
          <h3>Rich Espresso</h3>
        </div>

        <div className="gallery-item">
          <img
            src="/images/latte.jpg"
            alt="Creamy latte coffee"
          />
          <h3>Velvet Latte</h3>
        </div>

        <div className="gallery-item">
          <img
            src="/images/cappuccino.avif"
            alt="A cup of cappuccino"
          />
          <h3>Perfect Cappuccino</h3>
        </div>

        <div className="gallery-item">
          <img
            src="/images/cozy.jpg"
            alt="Cozy coffee shop interior"
          />
          <h3>Our Cozy Space</h3>
        </div>
      </section>
    </main>
  );
}

export default Gallery;