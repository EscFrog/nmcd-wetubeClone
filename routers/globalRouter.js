import express from "express";
import routes from "../routes";
import {
	videoHome_ctrl,
	searchVideo_ctrl,
} from "../controllers/videoController";
import {
	getJoin_ctrl,
	postJoin_ctrl,
	login_ctrl,
	logout_ctrl,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin_ctrl);
globalRouter.post(routes.join, postJoin_ctrl);

globalRouter.get(routes.home, videoHome_ctrl);
globalRouter.get(routes.search, searchVideo_ctrl);
globalRouter.get(routes.login, login_ctrl);
globalRouter.get(routes.logout, logout_ctrl);

export default globalRouter;
