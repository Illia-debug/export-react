 export interface IResponse {
	products: IProduct[];
	total: number;
	skip: number;
	limit: number;
}
 interface RootObjectProductsDimensions {
	width: number;
	height: number;
	depth: number;
}
 export interface RootObjectProductsReviews {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}
 interface RootObjectProductsMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}
 export interface IProduct {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: RootObjectProductsDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: RootObjectProductsReviews[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: RootObjectProductsMeta;
	images: string[];
	thumbnail: string;
}