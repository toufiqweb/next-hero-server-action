"use server";
import { revalidatePath } from "next/cache";
import {  postTask } from "./task";
import { redirect } from "next/navigation";

export const createTask = async (formData) => {
  //   const title = formData.get("title");
  //   const description = formData.get("description");
  //   const status = formData.get("status");
  //   const priority = formData.get("priority");
  //   const assignee = formData.get("assignee");

  //   const newTask = {
  //     title,
  //     description,
  //     status,
  //     priority,
  //     assignee,
  //   };

  const newTask = Object.fromEntries(formData.entries());
  //   console.log("adding a task ", newTask);

  const res = await postTask(newTask);

  if (res.ok) {
    revalidatePath("/tasks");
  }
};

export const addANewTask = async (formData) => {
  const newTask = Object.fromEntries(formData.entries());

  const res = await postTask(newTask);

  if (res.ok) {
    revalidatePath("/tasks");
    redirect("/tasks");
  }
};
