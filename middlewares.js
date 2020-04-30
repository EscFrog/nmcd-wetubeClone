import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = "WeTube";
	res.locals.routes = routes;
	res.locals.user = {
		isAuthenticated: true,
		id: 1,
	}; // 임시로 만든 객체
	next(); // 미들웨어로 추가했기 때문에 다음으로 넘어가기 위해 next()함수를 호출
};
