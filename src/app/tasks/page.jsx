import { getTasks } from "@/lib/task";
import React from "react";

const TaskPage = async () => {

    const tasks = await getTasks()
    console.log(tasks);
    

  return (
    <div className="space-y-10">
      <h1 className="text-5xl font-bold text-center">This is Tasks page</h1>
    </div>
  );
};

export default TaskPage;
