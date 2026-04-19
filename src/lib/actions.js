export const createTask = async (formData) => {
  "use server";

  const name = formData.get("name");

  console.log({"adding a task with a name" : name});
  
};
