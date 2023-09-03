const { BASE_URL } = process.env;

const unsubscripeMessage = `
<div>
  <h1 style="text-align: center; color: #161f37; font-size: 42px">
    Drink Master
  </h1>

  <div
    style="
      padding: 10px 30px;
      text-align: center;
      border-bottom: 1px solid #e5e0e0;
      border-top: 1px solid #e5e0e0;
    "
  >
    <p style="color: #0a0a11; font-size: 16px; letter-spacing: 0.02em; margin-bottom: 10px">
      Welcome to you!
    </p>
    <p style="color: #0a0a11; font-size: 16px; letter-spacing: 0.02em; margin-bottom: 10px">
    You have successfully unsubscribed from our newsletter. You will no longer receive messages from us.</p>
    <p style="color: #0a0a11; font-size: 16px; letter-spacing: 0.02em">
    If you decide to come back, you can always subscribe again.
    </p>
  </div>
  <div style="padding: 10px; text-align: center">
    <a
      href="/"
      target="_blank"
      style="text-decoration: none; font-size: 14px; color: #4070cd"
      >${BASE_URL}</a
    >
    <p style="margin: 0; margin-top: 4px; font-size: 12px; color: #0a0a11">
      ©2023 Drink Master. All rights reserved.
    </p>
  </div>
</div>

`;

export default unsubscripeMessage;
