import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { defineField, defineType } from 'sanity'

export const progressType = defineType({
	name: 'progress',
	title: 'Progress',
	type: 'document',
	fields: [
		defineField({
			name: 'id',
			type: 'string',
		}),
		defineField({
			name: 'current',
			type: 'number',
		}),
		defineField({
			name: 'total',
			type: 'number',
		}),
	],
})

export default defineConfig({
	name: "ryankeeping",
	projectId: "gg96oroa",
	dataset: "production",
	plugins: [structureTool()],
	schema: {
		types: [
			/* your content types here*/
			progressType
		],
	},
});