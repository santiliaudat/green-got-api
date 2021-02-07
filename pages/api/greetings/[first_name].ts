import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { first_name },
    method,
  } = req;

  if (method === "GET") {
    try {
      if (!first_name) {
        throw Error("Parameter first_name is required!");
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ payload: `Hello ${first_name}!` });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
