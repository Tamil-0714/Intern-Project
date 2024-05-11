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
  getFilesInfo,
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
  }
});

app.post("/files", async (req, res) => {
  // Check if the request is authenticated
  // { userId: 'nice', sessiodId: '35JL4i!Xjz4X5^J*' }
  const { userId, sessionId } = req.body;
  if (await validateSession(sessionId)) {
    try {
      const files = await getFilesInfo(userId);
      const filesPromises = files.map(async(file, i) => {
        const filePath = file.fileLink;
        const { name: fileName, ext: fileExtension } = path.parse(filePath);
        const fileBlob = await readFileAsBlob(filePath);
        const fileBase64 = fileBlob.toString('base64');
        return {
          fileName,
          fileExtension: fileExtension.slice(1), // Remove the leading dot from extension
          fileBase64,
        }
      });
      const resFile = await Promise.all(filesPromises)
      res.json(resFile)
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(403).json({ error: "Unauthorized" });
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

function readFileAsBlob(filePath) {
  return fs.promises.readFile(path.join(__dirname,filePath));
}

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
