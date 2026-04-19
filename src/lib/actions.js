import { revalidatePath } from "next/cache";
import { postTask } from "./task";

export const createTask = async (formData) => {
  "use server";

  const title = formData.get("title");
  const description = formData.get("description");
  const status = formData.get("status");
  const priority = formData.get("priority");
  const assignee = formData.get("assignee");

  const newTask = {
    title,
    description,
    status,
    priority,
    assignee,
  };
  //   console.log("adding a task ", newTask);

  const res = await postTask(newTask);

  if (res.ok) {
    revalidatePath("/tasks");
  }
};
