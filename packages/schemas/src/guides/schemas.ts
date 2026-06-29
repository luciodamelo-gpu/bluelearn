import { z } from "zod";

// Base primitives
export const titleSchema = z.string().trim().min(1).max(200);

export const summarySchema = z.string().trim().max(500);

export const bodySchema = z.string().trim();

export const slugSchema = z
  .string()
  .trim()
  .toLowerCase()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

// Shared enums
export const guideTypeSchema = z.enum(["canonical", "variant"]);

export const guideStatusSchema = z.enum(["draft", "published", "archived"]);

export const knowledgeTypeSchema = z.enum(["theory", "practice"]);

// Base guide (DB + internal logic)
export const guideBaseSchema = z.object({
  canonical_guide_id: z.uuid().nullable(),
  slug: slugSchema,
  type: guideTypeSchema.default("canonical"),
  status: guideStatusSchema.default("draft"),
  knowledge_type: knowledgeTypeSchema.default("theory"),
});