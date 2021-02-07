import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { validator } from "../../../helper/validator";
interface GreetingModel {
  first_name: string;
}

const greetingValidationSchema: yup.SchemaOf<GreetingModel> = yup.object().shape({
  first_name: yup.string().required(),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, method } = req;
  if (method === "GET") {
    const { errors } = await validator(greetingValidationSchema, query);
    //early return
    if (errors) {
      res.status(400).json({ errors });
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ payload: `Hello ${query.first_name}!` });
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
