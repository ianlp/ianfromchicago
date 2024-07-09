import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			portfolioImg: z.string(),
			portfolioImgDetail: z.string(),
			portfolioImg_alt: z.string().optional(),
		}),
	}),
};
