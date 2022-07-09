import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src="https://www.hotelhuber.com/media/d9d4acf4-1ac9-4a9e-a09d-0732e40d2c75/360_x_280/hotelhuber-zimmer-28.jpg" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m od centrum</span>
        <span className="siTaxiOp">Darmowa taksówka z lotniska</span>
        <span className="siSubtitle">
          Studio Apartment z klimatyzacją
        </span>
        <span className="siCancelOp">Darmowa rezygnacja</span>
        
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Bardzo dobra</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Zawiera wszystkie opłaty</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Sprawdź dostępność</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
