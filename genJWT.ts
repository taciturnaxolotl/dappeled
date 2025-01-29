const fs = require("fs");
const jwt = require("jsonwebtoken");

const keyId = process.env.APPLE_MUSIC_KEY_ID;
const privateKeyPath = `./keys/AuthKey_${keyId}.p8`;
const privateKey = fs.readFileSync(privateKeyPath).toString();
const teamId = process.env.APPLE_TEAM_ID;
const token = jwt.sign({}, privateKey, {
  algorithm: "ES256",
  expiresIn: "180d", // 180 days is the maximum
  issuer: teamId,
  header: {
    alg: "ES256",
    kid: keyId,
  },
});

console.log(token);
