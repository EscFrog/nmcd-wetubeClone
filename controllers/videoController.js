import { videos } from "../db";
export const videoHome_ctrl = (req, res) =>
	res.render("home", { pageTitle: "Home", videos });

export const searchVideo_ctrl = (req, res) => {
	// const searchingBy = req.query.term; //ES6 이전의 방식
	const {
		query: { term: searchingBy },
	} = req;
	res.render("search", { pageTitle: "Search", searchingBy });
};

export const upload_ctrl = (req, res) =>
	res.render("upload", { pageTitle: "Upload" });

export const videoDetail_ctrl = (req, res) =>
	res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo_ctrl = (req, res) =>
	res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo_ctrl = (req, res) =>
	res.render("deleteVideo", { pageTitle: "Delete Video" });
