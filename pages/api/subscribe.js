
import fetch from "node-fetch";

const handler = async (req, res) => {
  if (!req.body) {
    console.log("Request body is required");
    res.status(500).json({ data: null, error: "Request body is required" });
    return;
  }

  try {
    // Subscribe
    const { email, firstName } = JSON.parse(req.body);

    if (!email) {
      console.log("Email is required");
      res
        .status(500)
        .json({ data: null, error: "Email was not sent in the body request" });
      return;
    }

    if (!firstName) {
      console.log("Email is required");
      res.status(500).json({
        data: null,
        error: "firstName was not sent in the body request",
      });
      return;
    }

    const data = {
      email,
      first_name: firstName,
    };

    const response = await fetch(
      `${process.env.VISION_6_ENDPOINT}/lists/${process.env.VISION_6_LIST_SUBSCRIPTION_ID}/contacts/`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VISION_6_API_KEY}`,
        },
      }
    );

    checkStatus(response);

    const dataResponse = await response.json();

    res.status(200).json({ data: dataResponse, error: null });
  } catch (error) {
    if (!error || !error.response) {
      return;
    }
    const errorBodyJson = await error.response.json();
    console.error(`Error errorBodyJson: ${JSON.stringify(errorBodyJson)}`);

    if (errorBodyJson?.message?.includes("is already subscribed")) {
      res.status(200).json({ data: "already subscribed", error: null });
    } else {
      res.status(500).json({ data: null, error: errorBodyJson });
    }
  }
};

class HTTPResponseError extends Error {
  constructor(response, ...args) {
    super(
      `HTTP Error Response: ${response.status} ${response.statusText}`,
      ...args
    );
    this.response = response;
  }
}

const checkStatus = (response) => {
  if (response.ok) {
    // response.status >= 200 && response.status < 300
    return response;
  } else {
    throw new HTTPResponseError(response);
  }
};

export default handler;
