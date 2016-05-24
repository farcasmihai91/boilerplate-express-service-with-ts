import * as express from "express";

export default class IndexEngine {
    public static read(req: express.Request, res: express.Response, next: Function): void {
        res.send(200);
    }
}