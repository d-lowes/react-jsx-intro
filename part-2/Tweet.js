"use strict";

function Tweet({ username, name, date, message }) {
  return (
    <div className="tweet">
      <p>{message}</p>
      <ul>
        <li>{username}</li>
        <li>{name}</li>
        <li>{date}</li>
      </ul>
    </div>
  )
}