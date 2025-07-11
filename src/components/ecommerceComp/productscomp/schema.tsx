import * as z from "zod";

export const productInfoSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .max(100, "Name cannot exceed 100 characters"),

  weight: z
    .string()
    .nonempty("Weight is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Weight must be a number (up to 2 decimal places)"),

  sizes: z
    .string()
    .nonempty("Sizes are required")
    .max(50, "Sizes cannot exceed 50 characters"),

  category: z
    .string()
    .nonempty("Category is required")
    .max(50, "Category cannot exceed 50 characters"),

  description: z
    .string()
    .nonempty("Description is required")
    .max(500, "Description cannot exceed 500 characters"),
});


export const mediaSchema = z.object({
  media: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size <= 5 * 1024 * 1024, "File size must be 5MB or less")
        .refine(
          (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
          "Only JPEG, PNG, or WEBP images are allowed"
        )
    )
    .min(1, "At least one image is required")
    .max(10, "You can upload up to 10 images"),
});



export const socialSchema = z.object({
  facebookAccount: z
    .string()
    .nonempty("account is required")
    .url("Enter a valid Facebook URL"),
   

  instagramAccount: z
    .string()
    .nonempty("account is required")
    .url("Enter a valid Instagram URL"),
   

  linkedInAccount: z
    .string()    
    .nonempty("account is required")
    .url("Enter a valid LinkedIn URL"),
   

  dribbleAccount: z
    .string()
    .nonempty("account is required")
    .url("Enter a valid Dribbble URL"),
   

  behanceAccount: z
    .string()
    .nonempty("account is required")
    .url("Enter a valid Behance URL"),
  
  ui8Account: z
    .string()
    .nonempty("account is required")
    .url("Enter a valid UI8 URL"),
   
});



export const pricingSchema = z.object({
  price: z
    .string()
    .nonempty("Weight is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Weight must be a number (up to 2 decimal places)"),

  currency: z
    .string()
    .nonempty("Currency is required")
    .regex(/^[A-Z]{3}$/, "Currency must be a 3-letter code (e.g., USD, NPR, EUR)"),

  sku: z
    .string()
    .nonempty("SKU is required")
    .max(20, "SKU cannot exceed 20 characters"),

  tags: z
    .string()
    .nonempty("tags is required")
    .optional(),
});

export const unifiedSchema = productInfoSchema.merge(mediaSchema).merge(socialSchema).merge(pricingSchema);
export type UnifiedFormData = z.infer<typeof unifiedSchema>;

export default unifiedSchema;
