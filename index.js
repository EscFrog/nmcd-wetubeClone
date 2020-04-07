const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
	console.log(`Listening on: http://localhost:${PORT}`);
}

// express().get 으로 실행한 함수는 request, response 오브젝트를 argument로 받는다.
function handleHome(req, res) {
	res.send("Hello from home");
}

function handleProfile(req, res) {
	res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
