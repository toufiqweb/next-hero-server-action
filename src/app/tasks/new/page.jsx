"use client";
import { addANewTask } from "@/lib/actions";
import {
  Button,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  Form,
  FieldError,
} from "@heroui/react";
import React from "react";

const NewTask = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 space-y-10">
      <h1 className="text-5xl font-bold text-center">Add a new task</h1>
      <Form action={addANewTask} className="flex flex-col gap-4">
        <TextField
          isRequired
          validate={(value) => {
            if (value.length < 8) {
              return "title must be at least 8 characters";
            }
            return null;
          }}
          className="w-full"
          name="title"
          type="text"
        >
          <Label>Title</Label>
          <Input placeholder="Enter task title" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          validate={(value) => {
            if (value.length < 20) {
              return "Description must be at least 20 characters";
            }
            return null;
          }}
          className="w-full"
          name="description"
          type="text"
        >
          <Label>Description</Label>
          <Input placeholder="Enter task description" />
        </TextField>
        <Select name="status" className="w-full" placeholder="Select one">
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="progress" textValue="progress">
                Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <Select name="priority" className="w-full" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="high">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <TextField className="w-full" name="assignee">
          <Label>assignee</Label>
          <Input placeholder="Task assigned to" />
        </TextField>

        <div className="flex justify-center items-center gap-4 my-5">
          {" "}
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button slot="close" type="submit">
            Submit task
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewTask;
