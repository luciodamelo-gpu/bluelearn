import { z } from "zod";
import {
  guideBaseSchema,
  titleSchema,
  summarySchema,
  bodySchema,
  guideStatusSchema,
} from "./schemas";

import { guideReferenceSchema } from "./references";
import { subjectReferenceSchema } from "../subjects/references"; // TODO

/**
 * Final API Response (what frontend uses)
 */
export const guideResponseSchema = guideBaseSchema.extend({
  id: z.string().uuid(),
  guide_base_id: z.string().uuid(),

  slug: guideBaseSchema.shape.slug,

  title: titleSchema,
  summary: summarySchema,
  body: bodySchema,

  status: guideStatusSchema,

  author: z.string(),

  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),

  duration: z.number().int().nonnegative(),
  breadcrumbs: z.array(z.string()),

  // Fully hydrated relations (backend-resolved)
  tags: z.array(subjectReferenceSchema),

  prerequisites: z.array(guideReferenceSchema),
});

export type GuideResponse = z.infer<
  typeof guideResponseSchema
>;