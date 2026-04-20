
import { postBooks } from "@/lib/book";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createBook = async (formData) => {
    "use server"; 
  // console.log(formData);

  const newBook = Object.fromEntries(formData.entries());

  console.log(newBook);

  const res = await postBooks(newBook);

  if (res.ok) {
    revalidatePath("/books");
    redirect("/books");
  }
};
