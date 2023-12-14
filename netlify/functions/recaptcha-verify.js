const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { token } = JSON.parse(event.body);
  const secret = process.env.RECAPTCHA_SECRET_KEY; // reCAPTCHA secret key

  const fetch = (await import('node-fetch')).default;

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
  });

  const data = await response.json();

  if (data.success) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "ReCAPTCHA verified successfully" }),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "ReCAPTCHA verification failed", error: data }),
    };
  }
};
