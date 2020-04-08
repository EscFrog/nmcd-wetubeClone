import express from "express";
// 위 코드는 ES6에서만 지원. babel에 의해 해석되면 아래 코드와 같음
// const express = require("express");
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

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
