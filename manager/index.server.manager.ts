import * as express from "express";
import IndexEngine from "../engine/index.server.engine";


let router: express.Router = express.Router();

router.get('/', function (req: express.Request, res: express.Response) {
	return res.send('Hello world!');

});

export = router;