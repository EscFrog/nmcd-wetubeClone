import express from "express";
import routes from "../routes";
import {
	upload_ctrl,
	videoDetail_ctrl,
	editVideo_ctrl,
	deleteVideo_ctrl,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload_ctrl);
videoRouter.get(routes.videoDetail, videoDetail_ctrl);
videoRouter.get(routes.editVideo, editVideo_ctrl);
videoRouter.get(routes.deleteVideo, deleteVideo_ctrl);

export default videoRouter;
