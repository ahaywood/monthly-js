declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"details": {
"01__good.md": {
  id: "01__good.md",
  slug: "01__good",
  body: string,
  collection: "details",
  data: InferEntrySchema<"details">
},
"02__who.md": {
  id: "02__who.md",
  slug: "02__who",
  body: string,
  collection: "details",
  data: InferEntrySchema<"details">
},
"03__you.md": {
  id: "03__you.md",
  slug: "03__you",
  body: string,
  collection: "details",
  data: InferEntrySchema<"details">
},
},
"faqs": {
"01__expire.md": {
  id: "01__expire.md",
  slug: "01__expire",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"02__welcome-email.md": {
  id: "02__welcome-email.md",
  slug: "02__welcome-email",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"03__question.md": {
  id: "03__question.md",
  slug: "03__question",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"04__stream.md": {
  id: "04__stream.md",
  slug: "04__stream",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"05__theme.md": {
  id: "05__theme.md",
  slug: "05__theme",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"06__typo.md": {
  id: "06__typo.md",
  slug: "06__typo",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"07__github.md": {
  id: "07__github.md",
  slug: "07__github",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"08__redistribute.md": {
  id: "08__redistribute.md",
  slug: "08__redistribute",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"09__tools.md": {
  id: "09__tools.md",
  slug: "09__tools",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"10__hate.md": {
  id: "10__hate.md",
  slug: "10__hate",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"11__courses.md": {
  id: "11__courses.md",
  slug: "11__courses",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
"12__format.md": {
  id: "12__format.md",
  slug: "12__format",
  body: string,
  collection: "faqs",
  data: InferEntrySchema<"faqs">
},
},

	};

	type ContentConfig = typeof import("./config");
}
