---
title: "Contact"
date: 2022-03-03T07:37:48-05:00
draft: false
---
<form name="contact" method="POST" action="/thank_you/" data-netlify="true">
  <p>
    <input type="text" name="name" placeholder="Name"/>
  </p>
  <p>
    <input type="email" name="email" placeholder="Email" />
  </p>
  <p>
   <textarea name="message" placeholder="Message" ></textarea>
  </p>
  <p>
     <input type="file" name="myfile" placeholder="Upload File" />
  </p>
  <p>
     <div data-netlify-recaptcha="true"></div>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>