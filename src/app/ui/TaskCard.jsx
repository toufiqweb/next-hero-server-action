import { Card } from "@heroui/react";
import React from "react";

const TaskCard = ({ task }) => {
  const { title, description } = task;
  return (
    <Card className="w-[320px]" variant="secondary">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
    </Card>
  );
};

export default TaskCard;
