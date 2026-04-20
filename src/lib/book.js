import books from "@/data/books.json";

export const getBooks = async () => {
  return books;
};

export const postBooks = async (newBook) => {
  newBook.id = books.length + 1;

  books.unshift(newBook);

  return { ok: true, message: "Task added successfully" };
};
