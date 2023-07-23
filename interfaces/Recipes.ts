export interface RecipeResponse {
	count: number;
	results: Recipe[];
}

export interface Recipe {
	is_one_top: boolean;
	cook_time_minutes?: number;
	promotion: string;
	keywords: string;
	show: Show;
	servings_noun_plural: string;
	canonical_id: string;
	show_id: number;
	draft_status: string;
	sections: Section[];
	tags: Tag[];
	thumbnail_alt_text: string;
	credits: Credit[];
	topics: Topic[];
	slug: string;
	servings_noun_singular: string;
	video_url?: string;
	prep_time_minutes?: number;
	name: string;
	buzz_id: any;
	thumbnail_url: string;
	is_shoppable: boolean;
	video_id?: number;
	compilations: Compilation[];
	num_servings: number;
	brand?: Brand;
	nutrition: Nutrition;
	tips_and_ratings_enabled: boolean;
	video_ad_content?: string;
	seo_title: string;
	country: string;
	instructions: Instruction[];
	language: string;
	brand_id?: number;
	aspect_ratio: string;
	description: string;
	inspired_by_url: any;
	total_time_minutes?: number;
	nutrition_visibility: string;
	facebook_posts: any[];
	beauty_url?: string;
	total_time_tier: TotalTimeTier;
	yields: string;
	original_video_url?: string;
	updated_at: number;
	renditions: Rendition[];
	created_at: number;
	approved_at: number;
	user_ratings: UserRatings;
	id: number;
}

export interface Show {
	name: string;
	id: number;
}

export interface Section {
	components: Component[];
	name?: string;
	position: number;
}

export interface Component {
	ingredient: Ingredient;
	id: number;
	position: number;
	measurements: Measurement[];
	raw_text: string;
	extra_comment: string;
}

export interface Ingredient {
	id: number;
	display_singular: string;
	updated_at: number;
	name: string;
	created_at: number;
	display_plural: string;
}

export interface Measurement {
	quantity: string;
	id: number;
	unit: Unit;
}

export interface Unit {
	display_plural: string;
	display_singular: string;
	abbreviation: string;
	system: string;
	name: string;
}

export interface Tag {
	name: string;
	id: number;
	display_name: string;
	type: string;
}

export interface Credit {
	name?: string;
	type: string;
	slug?: string;
	image_url?: string;
	id?: number;
}

export interface Topic {
	name: string;
	slug: string;
}

export interface Compilation {
	facebook_posts: any[];
	canonical_id: string;
	id: number;
	aspect_ratio: string;
	keywords: any;
	created_at: number;
	language: string;
	video_url: string;
	buzz_id: any;
	video_id: number;
	show: Show2[];
	name: string;
	beauty_url: any;
	slug: string;
	promotion: string;
	country: string;
	is_shoppable: boolean;
	description: any;
	draft_status: string;
	thumbnail_url: string;
	thumbnail_alt_text: string;
	approved_at: number;
}

export interface Show2 {
	name: string;
	id: number;
}

export interface Brand {
	id: number;
	slug: string;
	image_url: string;
	name: string;
}

export interface Nutrition {
	carbohydrates?: number;
	fiber?: number;
	updated_at?: string;
	protein?: number;
	fat?: number;
	calories?: number;
	sugar?: number;
}

export interface Instruction {
	start_time: number;
	appliance?: string;
	end_time: number;
	temperature?: number;
	id: number;
	position: number;
	display_text: string;
}

export interface TotalTimeTier {
	tier: string;
	display_tier: string;
}

export interface Rendition {
	container: string;
	url: string;
	duration: number;
	bit_rate?: number;
	width: number;
	height: number;
	poster_url: string;
	file_size?: number;
	content_type: string;
	aspect: string;
	minimum_bit_rate?: number;
	name: string;
	maximum_bit_rate?: number;
}

export interface UserRatings {
	count_negative: number;
	count_positive: number;
	score?: number;
}
