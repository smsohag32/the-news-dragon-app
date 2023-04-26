import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, _id, details, image_url, author, total_view, rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header>
          <div className="d-flex align-items-center">
            <Image style={{ height: "45px" }} src={author?.img} roundedCircle />
            <div className="ms-2 flex-grow-1">
              <p className="mb-0">{author?.name}</p>
              <p>
                <small>
                  {moment(author?.published_date).format("yyy-MM-D")}
                  {}
                </small>
              </p>
            </div>
            <div>
              <FaRegBookmark />
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link className="text-primary" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
            <span className="ms-2">{rating.number}</span>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
