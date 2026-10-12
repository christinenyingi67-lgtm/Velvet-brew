import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            WELCOME TO THE VELVET BREW
          </p>

          <h1>
            Every Cup
            <br />
            Has A Story.
          </h1>

          <p className="hero-text">
            Great coffee, good company, and a cozy
            space to make your day a little brighter.
          </p>

          <a href="/menu" className="hero-button">
            Explore Our Menu <span>→</span>
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/images/feature.jpg"
            alt="Cozy coffee shop"
            style={{ width: "100%", height: "520px", objectFit: "cover" , borderRadius: "15px" }}
          />
        </div>
      </section>

      <section className="welcome-section">
        <p className="welcome-label">YOUR DAILY COFFEE ESCAPE</p>

        <h2>A Little Moment of Happiness</h2>

        <p>
          At The Velvet Brew, every cup is made with care.
          Stop by for your favorite coffee, relax in our
          cozy space, and enjoy the little things in life.
        </p>

        <a href="/about" className="welcome-button">
          Discover Our Story
        </a>
      </section>
    </main>
  );
}

export default Home;