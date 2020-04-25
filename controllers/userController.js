export const join_ctrl = (req, res) =>
	res.render("join", { pageTitle: "Join" });

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
