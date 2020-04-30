import { videosDB } from "../db";
import routes from "../routes";
export const videoHome_ctrl = (req, res) =>
	res.render("home", { pageTitle: "Home", videosDB });

export const searchVideo_ctrl = (req, res) => {
	// const searchingBy = req.query.term; //ES6 이전의 방식
	const {
		query: { term: searchingBy },
	} = req;
	res.render("search", { pageTitle: "Search", searchingBy, videosDB });
};

export const getUpload_ctrl = (req, res) =>
	res.render("upload", { pageTitle: "Upload" });

export const postUpload_ctrl = (req, res) => {
	const {
		body: { file, title, description },
	} = req;
	// To Do: Upload and save video
	res.redirect(routes.videoDetail(47393)); // 일단 fake ID입력
};

export const videoDetail_ctrl = (req, res) =>
	res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo_ctrl = (req, res) =>
	res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo_ctrl = (req, res) =>
	res.render("deleteVideo", { pageTitle: "Delete Video" });
