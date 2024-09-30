import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="language-currency">
        <p>Europe</p>
        <p>EN</p>
        <p>EUR &#8364;</p>
      </div>
      <div className="title">
        <p>Charlotte Tillbury</p>
      </div>
      <div className="client-action">
        <p>Loyalty</p>

        <i className="bi bi-person-fill"></i>
        <i className="bi bi-suit-heart-fill"></i>
        <i className="bi bi-search-heart-fill"></i>
        <i className="bi bi-bag-heart-fill"></i>
      </div>
    </div>
  );
};

export default Header;
