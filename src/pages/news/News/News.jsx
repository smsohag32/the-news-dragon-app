import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsite from "./EditorsInsite";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              All News This Category <FaArrowLeft></FaArrowLeft>
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="py-5">
        <EditorsInsite />
      </div>
    </div>
  );
};

export default News;
