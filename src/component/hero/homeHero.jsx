import "./hero.css";

export const HeroHome = () => {
  return (
    <div className="hero_container">
      <div className="hero_image_container">
        <div className="hero_content_container">
          <div className="hero_text">
            <h1>Welcome to Our Store!</h1>
            <p>
              Discover our amazing products and enjoy a hassle-free shopping
              experience.
            </p>
          </div>
          <div className="hero_button_container">
            <button>shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
