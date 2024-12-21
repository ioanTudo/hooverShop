import { Link } from "react-router-dom";
import "./reviews.css";

export const ReviewsDisplay = ({ title, content, finishingContent, id }) => {
  return (
    <div className="reviewsPage_container">
      <div>
        <h1>Reviews</h1>

        <div key={id} className="content_container">
          <h2>{title}</h2>
          <p>{content}</p>
          <p>{finishingContent}</p>
        </div>
        <div className="reviewBtn_container">
          <Link to={"https://www.trustpilot.com/writeareview"}>
            <button className="review_btn">Leave a review</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
