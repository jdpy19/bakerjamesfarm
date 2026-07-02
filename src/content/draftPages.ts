export type DraftPage = {
	slug: string;
	eyebrow: string;
	title: string;
	intro: string;
	sections: {
		title: string;
		body: string;
		items?: string[];
	}[];
};

export const draftPages: DraftPage[] = [
	{
		slug: "investor-packet",
		eyebrow: "Investor packet draft",
		title: "Baker James Farm investor preview",
		intro:
			"A private planning preview for the Baker James Farm homestead and agritourism concept. This page is available only when draft pages are enabled for local review.",
		sections: [
			{
				title: "Concept",
				body:
					"A limited collection of premium homesteads shaped by private acreage, cultivated gardens, native restoration areas, walking paths, and a distinct adjacent farm-venue lot.",
				items: [
					"Ultra-premium residential positioning",
					"Small-scale agritourism and venue programming on dedicated farm land",
					"Landscape-first planning with gardens, trails, and wildlife habitat restoration",
				],
			},
			{
				title: "Site Plan Logic",
				body:
					"The current diagram separates the farm/venue lot from the private home lots, then uses restoration land and walking paths to organize the experience.",
				items: [
					"Farm and venue activity is concentrated on its own lot",
					"Home lots remain private, multi-acre, and visually buffered",
					"Restoration areas focus on invasive cleanup, native habitat, and wildlife movement",
					"Walking paths connect the land without turning the residential areas into public space",
				],
			},
			{
				title: "Planning Focus",
				body:
					"The current work is centered on site planning, capital strategy, diligence, and refining the public-facing story before any formal investor materials are published.",
				items: [
					"Validate entitlement and site constraints",
					"Refine homestead count, lot layout, restoration strategy, and amenity strategy",
					"Prepare next-stage diligence materials",
				],
			},
		],
	},
];

export function getDraftPage(slug: string) {
	return draftPages.find((page) => page.slug === slug);
}
