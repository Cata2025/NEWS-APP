import axios from "axios";
import { useEffect, useState } from "react";

const fakeBooks = [
  {
    url: "http://www.nytimes.com/2011/11/13/books/review/11-22-63-by-stephen-king-book-review.html",
    publication_dt: "2011-11-13",
    byline: "ERROL MORRIS",
    book_title: "11/22/63",
    book_author: "Stephen King",
    summary: "Stephen King’s time traveler tries to undo some painful history.",
    uuid: "00000000-0000-0000-0000-000000000000",
    uri: "nyt://book/00000000-0000-0000-0000-000000000000",
    isbn13: [
      "9780307951434",
      "9780606351461",
      "9781442344280",
      "9781442344303",
      "9781442391635",
      "9781444727326",
      "9781451627282",
      "9781451627299",
      "9781451627305",
      "9781451651645",
      "9781501120602",
      "9781594135590",
    ],
  },
  {
    url: "http://www.nytimes.com/2011/10/31/books/stephen-kings-11-23-63-review.html",
    publication_dt: "2011-10-31",
    byline: "JANET MASLIN",
    book_title: "11/22/63",
    book_author: "Stephen King",
    summary:
      "Stephen King’s latest novel, “11/22/63,” tells of a schoolteacher who travels back to 1958 to alter history, and falls in love as well.",
    uuid: "00000000-0000-0000-0000-000000000000",
    uri: "nyt://book/00000000-0000-0000-0000-000000000000",
    isbn13: [
      "9780307951434",
      "9780606351461",
      "9781442344280",
      "9781442344303",
      "9781442391635",
      "9781444727326",
      "9781451627282",
      "9781451627299",
      "9781451627305",
      "9781451651645",
      "9781501120602",
      "9781594135590",
    ],
  },
];

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=QpZKiWinecnxDm03OF45Wvt0HqMi84hE"
      )
      .then((response) => {
        setBooks(response.data.results);
      });
  }, []);
  return (
    <div>
      {books.map((book) => {
        return (
          <>
            <h1 key={book.url}>{book.book_title}</h1>
            <p>{book.summary}</p>
          </>
        );
      })}
    </div>
  );
};

export default BooksList;
