import React from "react";

export const Modal = ({ success, closeMessage }) => {
  return (
    <div>
      {success ? (
        <p>Thank you for your message. I'll be back with you shortly.</p>
      ) : (
        <p>Sorry, something went wrong. Please try again. </p>
      )}
      <button onClick={closeMessage}>Close</button>
    </div>
  );
};
