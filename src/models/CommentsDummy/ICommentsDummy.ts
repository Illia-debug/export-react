import type {IRootUserDummy} from "./IRootUserDummy.ts";

export interface ICommentsDummy {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: IRootUserDummy;
}
