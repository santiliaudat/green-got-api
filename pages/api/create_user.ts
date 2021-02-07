import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { firstName, lastName }: { firstName: string; lastName: string } = req.body;

  if (method === "POST") {
    try {
      if (!firstName) {
        throw Error("Parameter firstName is required!");
      }
      if (!lastName) {
        throw Error("Parameter lastName is required!");
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ payload: `${firstName.toUpperCase()} ${lastName.toUpperCase()}` });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
