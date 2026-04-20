import { getTasks } from "@/lib/task";
import React from "react";
import { AddTask } from "@/components/taskComponents/AddTask";
import { createTask } from "@/lib/actions";
import Link from "next/link";
import { Button } from "@heroui/react";
import TaskCard from "../../../ui/TaskCard";

const TaskPage = async () => {
  const tasks = await getTasks();
  console.log(tasks);

  return (
    <div className="space-y-10 container mx-auto py-10">
      <h1 className="text-5xl font-bold text-center">This is Tasks page</h1>
      <AddTask createTask={createTask} />

      <Link href="/tasks/new">
        <Button variant="primary">Add a new task</Button>
      </Link>
      <div className="grid grid-cols-3 gap-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
