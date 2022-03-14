import "./Home.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openCalender, setOpenCalender] = useState(false);

  return (
    <div className="home">
      <div className="left">
        <div className="left-header">
          <div className="left-header-top">
            <img src="/images/plane.png" alt="plane" />
            <h2>Travel Planner</h2>
          </div>
          <div className="left-header-bottom">
            <p>Let's Plan The Trip</p>
          </div>
        </div>
        <div className="left-middle">
          <div className="left-middle-top">
            <h2>
              Where do you want to go? <span style={{ color: "red" }}>*</span>
            </h2>
            <input type="text" placeholder="Eg:France,Greece" />
          </div>
          <div className="left-middle-bottom">
            <h2>When will you travel?</h2>
            <div className="date-input">
              <div>
                <label className="from">
                  <DatePicker
                    className="datePicker"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="From"
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                  />
                  <CalendarTodayOutlinedIcon className="icon" />
                </label>
              </div>
              <div>
                <label className="to">
                  <DatePicker
                    className="datePicker"
                    selected={endDate}
                    placeholderText="To"
                    onChange={(date) => setEndDate(date)}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                  />
                  <CalendarTodayOutlinedIcon className="icon" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <Link to="/add-notes">
          <div className="left-button">
            <button>Continue</button>
          </div>
        </Link>
      </div>
      <div className="right">
        <img src="/images/Rectangle.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
