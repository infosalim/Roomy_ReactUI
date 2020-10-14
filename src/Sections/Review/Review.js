import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

import ReviewCard from "../../components/ReviewCard/ReviewCard";

export default function Contact() {
  const reviewData = [
    {
      reviewQuality: "9.0 Excellent",
      reviewAuthor: "Michael from Israel",
      reviewDesc: "Good for this price. Locate in city center.",
      duration: "Stayed 1 night"
    },
    {
      reviewQuality: "8.7 Very Good",
      reviewAuthor: "CHIEN from Malaysia",
      reviewDesc: "Good for this price. Locate in city center. ",
      duration: "Stayed 1 night"
    },
    {
      reviewQuality: "8.2 Very Good",
      reviewAuthor: "Viv from United Kingdom",
      reviewDesc: "Clean and comfortable.",
      duration: "Stayed 3 nights",
      secondaryDesc:
        "Tours is another shopping heaven with a lot of branded shops and fashion for ladies especially handbag.",
    },
  ];

  const renderReviews = reviewData.map((review, i) =>
    review.secondaryDesc ? (
      <ReviewCard
        key={i}
        quality={review.reviewQuality}
        author={review.reviewAuthor}
        desc={review.reviewDesc}
        secondaryDesc={review.secondaryDesc}
        duration={review.duration}
      />
    ) : (
      <ReviewCard
        key={i}
        quality={review.reviewQuality}
        author={review.reviewAuthor}
        desc={review.reviewDesc}
        duration={review.duration}
      />
    )
  );

  return (
    <div className="review-area">
      <Container>
        <Row>
          <Col md="12">
            <h2>
              <span>ROOMY</span> Reviews
            </h2>
            {renderReviews}
            <button>More Reviews</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
