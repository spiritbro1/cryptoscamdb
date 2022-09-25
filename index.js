const axios = require("axios");
const fs = require("fs");
async function getAllData() {
  const { data } = await axios.get("https://api.cryptoscamdb.org/v1/addresses");

  fs.writeFileSync("cryptoscamdbaddress.json", JSON.stringify(data));
}
async function createNewData() {
  const data = fs.readFileSync("./cryptoscamdbaddress.json", {
    encoding: "utf8",
    flag: "r",
  });
  const per = JSON.parse(data);

  const test = { a: 1, b: 2, c: 3 };
  const into = [];
  for (const [key, value] of Object.entries(per.result)) {
    into.push(...value);
  }
  fs.writeFileSync("cryptoscamdbaddressnew.json", JSON.stringify(into));
}
createNewData();
