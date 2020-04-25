import express from "express";
import routes from "../routes";
import {
	userDetail_ctrl,
	editProfile_ctrl,
	changePassword_ctrl,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile_ctrl); //get 함수의 첫번째 인자에 주소가 입력되면 두번째 인자의 함수를 콜백으로 실행.
userRouter.get(routes.changePassword, changePassword_ctrl);
userRouter.get(routes.userDetail, userDetail_ctrl); // 순서가 중요함. routes 오브젝트의 userDetail 키에 할당된 "":/id" 값이 가장 아래 있어야 함.

export default userRouter;
