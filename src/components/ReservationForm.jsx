import { useState } from "react";
import { useNavigate } from "react-router";

function ReservationForm() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    author: "",
    comment: "",
  });

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reservation Details:", formData);
    localStorage.setItem("datosReserva", formData);
    setSubmitted(true);
    navigate("/");
  };

  return (
    <div>
      <h2>Create a new book</h2>
      {submitted ? (
        <div>
          <h3>Book Submitted!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="comment">Comment:</label>
            <input
              type="text"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ReservationForm;
