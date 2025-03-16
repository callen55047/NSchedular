export default function FullWidthEmail(heading: string, body?: string): string {
  return `
    <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Notification</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .body-container {
      margin: 0 20px;
    }

    .header {
      text-align: center;
      padding: 15px;
    }

    .header h1 {
      color: black;
      font-size: 30px;
      margin: 10px 0;
      font-weight: normal;
    }

    .header-image {
      max-height: 50px;
      margin: 20px;
      object-fit: contain;
    }

    .content a {
      color: #5797F8;
    }

    .footer {
      text-align: center;
      background: #efefef;
      padding: 25px;
    }

    .footer p {
      color: #4b4b4b;
    }

    h1 {
      color: #0c0c0c;
      margin: 0;
    }

    h2 {
      color: #2a2a2a;
    }

    .highlight {
      margin-top: 5px;
      margin-bottom: 20px;
      background-color: #f1f1f1;
      padding: 5px;
      border-radius: 4px;
      display: inline-block;
    }

    p {
      color: #151515;
    }

    .marketing {
      font-size: 14px;
    }

    .inline-text {
      margin: 0;
    }

    .secondary {
      color: grey;
    }

    .focused-text {
      font-size: 18px;
      font-weight: bold;
    }


  </style>
</head>
<body>
<div class="body-container">
  <div class="header">
    <img
      class="header-image"
      src="public-image-resource"
      alt="banner"
    />
    ${heading}
  </div>
  <div class="content">
    ${body || ''}
  </div>
</div>
<br/>

<div class="footer">
  <p>This message was sent to you by the NodeSchedular</p>
  <div>
    <p class="marketing"><strong>What is NodeSchedular?</strong> An online platform that seamlessly connects artists
      and clients together. <a href="https://domain.com" target="_blank">Learn more</a>
    </p>
  </div>
</div>
</body>
</html>
  `
}