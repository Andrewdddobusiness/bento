"use server";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  message: z.string(),
});

export async function createUser(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    message: "User created successfully",
  });
  console.log(validatedFields);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: "Please enter a valid email",
    };
  }

  return {
    message: "User created successfully",
  };
}
