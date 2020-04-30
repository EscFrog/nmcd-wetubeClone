import express from "express";
import routes from "../routes";
import {
	getUpload_ctrl,
	postUpload_ctrl,
	videoDetail_ctrl,
	editVideo_ctrl,
	deleteVideo_ctrl,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload_ctrl);
videoRouter.post(routes.upload, postUpload_ctrl);
videoRouter.get(routes.videoDetail(), videoDetail_ctrl);
videoRouter.get(routes.editVideo, editVideo_ctrl);
videoRouter.get(routes.deleteVideo, deleteVideo_ctrl);

export default videoRouter;
