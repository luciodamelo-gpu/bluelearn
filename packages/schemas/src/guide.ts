import { z } from 'zod'

// For creating a guide, shared by the API (request
// validation) and the frontend (form validation + inferred type).
export const createGuideSchema = z.object({
  title: z.string().trim().min(1).max(200),
  knowledge_type: z.enum(['theory', 'practice']),
  summary: z.string().trim().max(500).nullish(),
  body: z.string().trim().nullish(),
})

export type CreateGuideInput = z.infer<typeof createGuideSchema>
