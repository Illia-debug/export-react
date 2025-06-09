import type {RootObjectReactions} from "./IreactionsDummy.ts";

export interface IPostDummy {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: RootObjectReactions;
	views: number;
	userId: number;
}
