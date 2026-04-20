import { Card } from "@heroui/react";
import React from "react";

const BookCard = ({ book }) => {
  const { title, publishedYear, author } = book;

  return (
    <Card className="w-[320px]" variant="tertiary">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{author}</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>{publishedYear}</p>
      </Card.Content>
    </Card>
  );
};

export default BookCard;
