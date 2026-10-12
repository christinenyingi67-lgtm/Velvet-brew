import "./Menu.css";

function Menu() {
  return (
    <main className="menu-page">
      <section className="menu-heading">
        <p className="menu-label">OUR SELECTION</p>
        <h1>Our Coffee Menu</h1>
        <p>
          Discover your next favorite cup,
          freshly prepared just for you.
        </p>
      </section>

      <section className="menu-list">
        <div className="menu-item">
          <div>
            <h3>Espresso</h3>
            <p>Rich, bold and full of flavor.</p>
          </div>
          <span>KSh 180</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Cappuccino</h3>
            <p>Espresso with steamed milk and foam.</p>
          </div>
          <span>KSh 250</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Caffè Latte</h3>
            <p>Smooth espresso with creamy milk.</p>
          </div>
          <span>KSh 280</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Mocha</h3>
            <p>A delicious blend of coffee and chocolate.</p>
          </div>
          <span>KSh 300</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Iced Coffee</h3>
            <p>Chilled coffee for a refreshing moment.</p>
          </div>
          <span>KSh 250</span>
        </div>

        <div className="menu-item">
          <div>
            <h3>Hot Chocolate</h3>
            <p>Warm, smooth and chocolatey.</p>
          </div>
          <span>KSh 220</span>
        </div>
      </section>
    </main>
  );
}

export default Menu;