import express from "express";
// 위 코드는 ES6에서만 지원. babel에 의해 해석되면 아래 코드와 같음
// const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookiePaser from "cookie-parser";
import bodyparser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
	console.log(`Listening on: http://localhost:${PORT}`);
// 위 코드는 ES6에서만 지원. arrow function 이라고 함. babel에 의해 해석되면 아래 코드와 같음
/*
function handleListening() {
	console.log(`Listening on: http://localhost:${PORT}`);
}
*/

const handleHome = (req, res) => res.send("Hello from home");
// 위 코드는 ES6에서만 지원. arrow function 이라고 함. babel에 의해 해석되면 아래 코드와 같음
// express().get 으로 실행한 함수는 request, response 오브젝트를 argument로 받는다.
/*
function handleHome(req, res) {
	res.send("Hello from home");
}
*/

const handleProfile = (req, res) => res.send("You are on my profile");
// 위 코드는 ES6에서만 지원. arrow function 이라고 함. babel에 의해 해석되면 아래 코드와 같음
/*
function handleProfile(req, res) {
	res.send("You are on my profile");
}
*/

/* 미들웨어 예제
const betweenHome = (req, res, next) => {
	console.log("I'm in between");
	next();
};

// 미들웨어 추가. 몇 개든 추가할 수 있지만 순서가 중요함. 아래에 있는 get함수로 가는 Route에서만 미들웨어가 실행됨
app.use(betweenHome);

// app.get("/", betweenHome, handleHome);
*/

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
