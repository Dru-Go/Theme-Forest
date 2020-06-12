import React from "react";

export default function pageTitle({title, title2}) {
  return (
    <section class="page-title centred">
      <div class="container">
        <div class="content-box">
          <h1>{title}</h1>
          <ul class="bread-crumb clearfix">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>{title2}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
