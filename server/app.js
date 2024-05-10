const express = require("express");
// const axios = require("axios");
const app = express();
const PORT = 3000;
const cors = require("cors");
const bcrypt = require("bcrypt");
const {
  fetchUser,
  updateSessionId,
  fetchUserWithSession,
  gatherUsers,
} = require("./DB/DB");
const path = require("path");
const fs = require("fs");
app.use(cors());
app.use(express.json());

app.post("/adminCred", async (req, res) => {
  const { userName, password, sessionId } = req.body;
  if (!sessionId) {
    const thisSessionId = generateSession();
    const user = await fetchUser(userName);
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (result !== undefined && result === true) {
          const sessonUpdateRes = await updateSessionId(
            thisSessionId,
            user[0].userName
          );

          if (sessonUpdateRes.affectedRows === 1) {
            res.send({ sessionId: thisSessionId });
          } else {
            res.send({ sessionId: false });
          }
        } else {
          res.send({ sessionId: false });
        }
      });
    } else {
      res.send({ sessionId: false });
    }
  } else {
    res.send({ isOk: await validateSession(sessionId) });
  }
});

app.post("/users", async (req, res) => {
  if (await validateSession(req.body.sessionId)) {
    const users = await gatherUsers();
    const usersWithImages = await Promise.all(
      users.map(async (user) => {
        const imgPath = path.join(__dirname, user.profileLink);
        const imgBuffer = await fs.promises.readFile(imgPath);
        const base64Image = imgBuffer.toString("base64");
        return {
          ...user,
          profileLink: `data:image/jpeg;base64,${base64Image}`,
        };
      })
    );
    res.json(usersWithImages);

    // console.log(users)
    // const imgPath = path.join(__dirname, 'src/img', 'test_profile.jpeg')
    // const imgStream = fs.createReadStream(imgPath)
    // imgStream.pipe(res)
    // res.send(users)   /src/img/test_profile.jpeg
  }
});

const validateSession = async (s) => {
  const result = await fetchUserWithSession(s);
  if (result.length > 0) return true;
  return false;
};

const generateSession = () => {
  const str = "#XxYyZzJjIiLlUu123*54!^Tt";
  let usrky = ``;
  for (let i = 0; i < 16; i++) {
    usrky += str[Math.floor(Math.random() * str.length)];
  }
  return usrky;
};

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
