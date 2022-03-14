import "./Notes.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Notes({ day, days, title }) {
  return (
    <>
      <div className="header">
        <div className="circle"></div>
        <p>
          Day {day} . {days}, May 12
        </p>
      </div>
      <div className="middle">
        <div className="line"></div>
        <div className="box">
          <div className="content">
            <h3>Roam Around {title}</h3>
            <div className="hline"></div>
            <div className="locations">
              <div className="location">
                <LocationOnIcon id="icon" />
                <p>Tal Baharai</p>
              </div>
              <div className="location">
                <LocationOnIcon id="icon" />
                <p>Waterfront Restaurant</p>
              </div>
              <div className="location">
                <LocationOnIcon id="icon" />
                <p>Pame Beach Resort</p>
              </div>
            </div>
            <div className="texts">
              <p>
                <span>08:00 am: </span> Meet at the hotel lobby{" "}
              </p>
              <p>
                <span>08:15 am: </span> Head toward Tal Bahrahi{" "}
              </p>
              <p>
                <span>09:00 am: </span> Get to the bus{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
