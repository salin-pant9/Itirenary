import React from "react";
import "./AddNotes.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";

function AddNotes() {
  return (
    <div className="container">
      <div className="left">
        <div className="left-header">
          <div className="left-header-top">
            <h1>Trip to Pokhara</h1>
            <ModeEditOutlinedIcon className="icon" />
          </div>
          <div className="left-header-bottom">
            <CalendarTodayOutlinedIcon className="icons" />
            <span>May 12 - May 13</span>
          </div>
        </div>
        <div className="left-middle">
          <h2>Itinerary</h2>
          <div className="editor">
            <div className="editor-header">
              <div className="editor-left">
                <p>Day 1 | Tuesday,May 12</p>
                <h3>Add title here</h3>
              </div>
              <KeyboardArrowUpIcon />
            </div>
            <div className="location">
              <p>Location: </p>
              <input type="text" placeholder="Pame, Lakeside" />
            </div>
            <div className="notes">
              <p>Notes: </p>
              <input type="text-area" />
            </div>
            <div className="other-days"></div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-left">
            <div className="share">
              <ShareIcon />
              <p>Share</p>
            </div>
            <div className="print">
              <PrintIcon />
              <p>Print</p>
            </div>
          </div>
          <Link to="/view">
            <button className="button">
              <SaveIcon />
              <span>Save</span>
            </button>
          </Link>
        </footer>
      </div>
      <div className="right">
        <img src="/images/map.png" alt="map" />
      </div>
    </div>
  );
}

export default AddNotes;
