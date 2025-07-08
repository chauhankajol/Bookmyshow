import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movie, changeMovie] = useState("");
  const [time, changeTime] = useState("");
 const [noofSeat, changeNoofseat] = useState({
  A1: 0,
  A2: 0,
  A3: 0,
  A4: 0,
  D1: 0,
  D2: 0,
});

  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movie, slot: time, seats: noofSeat }),
      });
      const data = await res.json();
      setErrorPopup(true);
      setErrorMessage(data.message);

      if (res.status === 200) {
        changeMovie("");
        changeTime("");
        window.localStorage.clear();
        await handleGetBooking();
      }
    } catch (err) {
      console.error("Booking failed:", err);
    }
  };

  const handleGetBooking = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/booking");
      const data = await res.json();
      console.log("Fetched booking data:", data);
      setLastBookingDetails(data.data);
    } catch (err) {
      console.error("Failed to fetch booking:", err);
    }
  };

  useEffect(() => {
    const storedMovie = window.localStorage.getItem("movie");
    const storedSlot = window.localStorage.getItem("slot");
    const storedSeats = JSON.parse(window.localStorage.getItem("seats"));

    if (storedMovie) changeMovie(storedMovie);
    if (storedSlot) changeTime(storedSlot);
    if (storedSeats) changeNoofseat(storedSeats);
  }, []);

  return (
    <BsContext.Provider
      value={{
        movie, changeMovie,
        time, changeTime,
        noofSeat, changeNoofseat,
        lastBookingDetails, handleGetBooking, handlePostBooking,
        errorMessage, errorPopup, setErrorMessage, setErrorPopup
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
