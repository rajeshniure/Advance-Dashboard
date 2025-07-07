import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .max(50, "First name cannot be longer than 50 characters")
    .regex(/^[A-Za-z]+$/, "First name must contain only letters"),

  lastName: z
    .string()
    .nonempty("Last name is required")
    .max(50, "Last name cannot be longer than 50 characters")
    .regex(/^[A-Za-z]+$/, "Last name must contain only letters"),

  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  dob: z
    .string()
    .nonempty("Date of birth is required")
    .refine(
      (val) => {
        const date = new Date(val);
        return !isNaN(date.getTime());
      },
      {
        message: "Invalid date format. Use YYYY-MM-DD",
      }
    ),

  city: z
    .string()
    .nonempty("City is required")
    .max(100, "City cannot be longer than 100 characters")
    .regex(/^[A-Za-z\s]+$/, "City name must contain only letters and spaces"),

  postalCode: z
    .string()
    .nonempty("Postal code is required")
    .max(10, "Postal code must not exceed 10 characters")
    .regex(/^\d{4,10}$/, "Postal code must be numeric and 4 to 10 digits long"),

  streetname: z
    .string()
    .nonempty("Street name is required")
    .max(100, "Street name cannot be longer than 100 characters")
    .regex(/^[A-Za-z\s]+$/, "Street name must contain only letters and spaces"),

  streetno: z
    .string()
    .nonempty("Street number is required")
    .max(10, "Street number must not exceed 10 characters")
    .regex(/^\d+$/, "Street number must be numeric"),

  country: z
    .string()
    .nonempty("Country is required")
    .max(100, "Country name cannot be longer than 100 characters")
    .regex(/^[A-Za-z\s]+$/, "Country name must contain only letters and spaces"),
});

export default schema;