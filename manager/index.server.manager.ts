import * as express from "express";
import IndexEngine from "../engine/index.server.engine";

export default class IndexRoute {
	constructor(app : express.Express) {
		IndexRoute.activate(app);
	}
	
	public static activate (app : express.Express) : void {
		app.route("/")
			.get(IndexEngine.read);
	}
}