import { getBooks } from "@/lib/book";
import React from "react";
import BookCard from "../../../ui/BookCard";
import BookAdd from "@/components/bookComponents/BookAdd";
import { createBook } from "./action";

const BooksPage = async () => {
  const books = await getBooks();
  console.log(books);

  return (
    <div className="container mx-auto px-5 space-y-10 py-10">
      <h1 className="text-5xl text-center font-bold ">Books are here !</h1>
      <div className="flex justify-center items-center py-5">
        <BookAdd createBook={createBook}/>
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
