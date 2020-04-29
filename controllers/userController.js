import routes from "../routes";

export const getJoin_ctrl = (req, res) => {
	res.render("join", { pageTitle: "Join" });
};

export const postJoin_ctrl = (req, res) => {
	const {
		body: { name, email, password, password2 },
	} = req;
	if (password !== password2) {
		res.status(400);
		res.render("join", { pageTitle: "Join" });
	} else {
		// To Do: Register user
		// To Do: Log user in
		res.redirect(routes.home);
	}
};

export const login_ctrl = (req, res) =>
	res.render("login", { pageTitle: "Log in" });

export const logout_ctrl = (req, res) =>
	res.render("logout", { pageTitle: "Log out" });

export const userDetail_ctrl = (req, res) =>
	res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile_ctrl = (req, res) =>
	res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword_ctrl = (req, res) =>
	res.render("changePassword", { pageTitle: "Change Password" });
