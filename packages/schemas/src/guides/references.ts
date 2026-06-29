import { z } from "zod";
import { slugSchema, titleSchema } from "./schemas";

export const guideReferenceSchema = z.object({
  slug: slugSchema,
  title: titleSchema,
});

export type GuideReference = z.infer<
  typeof guideReferenceSchema
>;