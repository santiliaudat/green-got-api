import { SchemaOf } from "yup";

export async function validator<T = Record<string, any>>(
  scheme: SchemaOf<T>,
  data: Record<string, any> | null
) {
  try {
    await scheme.validate(data, { abortEarly: false });
    return { isValid: true, errors: null };
  } catch (error) {
    const { errors } = error;
    return { isValid: false, errors };
  }
}
