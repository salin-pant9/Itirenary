import "./View.css";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import Notes from "./Notes";

function View() {
  return (
    <div className="container">
      <div className="view">
        <img src="/images/Frame 66.png" alt="" />
        <div className="name">
          <h2>Itinerary</h2>
          <div className="buttons">
            <div className="share">
              <ShareIcon />
              <p>Share</p>
            </div>
            <div className="print">
              <PrintIcon />
              <p>Print</p>
            </div>
          </div>
        </div>

        <div className="notes">
          <Notes day="1" days="Tuesday" date="12" title="Lakeside" />
          <Notes day="2" days="Wednesday" date="13" title="Sarangkot" />
          <Notes day="3" days="Thursday" date="14" title="Mahendrapool" />
        </div>
      </div>
    </div>
  );
}

export default View;
