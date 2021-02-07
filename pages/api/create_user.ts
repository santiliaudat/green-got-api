import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { validator } from "../../helper/validator";
interface UserModel {
  firstName: string;
  lastName: string;
}

const UserValidationSchema: yup.SchemaOf<UserModel> = yup.object().shape({
  firstName: yup.string().strict().required(),
  lastName: yup.string().strict().required(),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  if (method === "POST") {
    const { errors } = await validator(UserValidationSchema, body);
    if (errors) {
      res.status(400).json({ errors });
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res
      .status(200)
      .json({ payload: `${body.firstName.toUpperCase()} ${body.lastName.toUpperCase()}` });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
