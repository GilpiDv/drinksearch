import {z} from 'zod'
import type { CategoriesAPIResponseSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
