import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // 이 부분 때문에 routes.users 값에 할당된 "/users" 가 주소 앞에 붙어야함.
app.use(routes.videos, videoRouter); // 이 부분 때문에 routes.videos값에 할당된 "/videos" 가 주소 앞에 붙어야함

export default app;
