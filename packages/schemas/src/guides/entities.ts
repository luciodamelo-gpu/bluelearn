import { z } from "zod";
import { guideBaseSchema, slugSchema } from "./schemas";

// Before hydration
export const guideEntitySchema = guideBaseSchema.extend({
  id: z.uuid(),
  guide_base_id: z.uuid(),

  current_revision_id: z.uuid().nullable(),

  author_id: z.uuid(),

  created_at: z.date(),
  updated_at: z.date(),

  tags: z.array(slugSchema),           // subject slugs
  prerequisites: z.array(slugSchema),  // guide slugs/ids
});

export type GuideEntity = z.infer<typeof guideEntitySchema>;