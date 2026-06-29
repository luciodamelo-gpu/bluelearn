import { z } from "zod";
import {
  bodySchema,
  summarySchema,
  titleSchema,
  slugSchema,
  knowledgeTypeSchema,
} from "./schemas";

// Create Guide
export const createGuideRequestSchema = z.object({
  guide_base_id: z.uuid(),

  slug: slugSchema,

  title: titleSchema,
  summary: summarySchema,
  body: bodySchema,

  knowledge_type: knowledgeTypeSchema,

  tags: z.array(z.string()),          // subject slugs
  prerequisites: z.array(z.string()), // guide base slugs
});

export type CreateGuideRequest = z.infer<
  typeof createGuideRequestSchema
>;

// Update Guide (partial)
export const updateGuideRequestSchema =
  createGuideRequestSchema.partial();

export type UpdateGuideRequest = z.infer<
  typeof updateGuideRequestSchema
>;