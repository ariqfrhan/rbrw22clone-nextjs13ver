export interface Activity {
	body: string;
	head: string;
}
export interface FaqUkm {
	question: string;
	answer: string;
}

export type ukmCategory =
	| "Kesenian"
	| "Kesejahteraan"
	| "Khusus"
	| "Olahraga"
	| "Penalaran"
	| undefined;

export interface Ukm {
	id: string;
	name: string;
	slug: string;
	logo: string;
	category: ukmCategory;
	hobby_collect: string;
	image: string[];
	prestasi: string;
	description: string;
	pesan: string;
	instagram: string;
	line: string;
	email: string;
	kegiatan: Activity[];
	faq: { answer: string; question: string }[];
	youtube_vidio: string;
	register_link: string;
	zoom_link: string;
	is_active: number;
	created_by: string;
	created_at: string;
	updated_at: string;
}

export interface ukmContext {
	home: Ukm[];
	detail: {
		slug: Ukm;
	} | null;
	ukmByCategory: UkmByCategory;
	loadingHome: boolean;
}

export interface UkmByCategory {
	Kesenian: Ukm[];
	Kesejahteraan: Ukm[];
	Khusus: Ukm[];
	Olahraga: Ukm[];
	Penalaran: Ukm[];
}

export interface detailType {
	slug: Ukm;
}
