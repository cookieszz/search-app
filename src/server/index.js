const app = require("express")();
const fs = require("fs");
const cors = require("cors");

const port = 9000;

app.use(cors());

app.get("/api/posts", (req, res) => {
  res.send([]);
});

app.get("/api/posts/:title", (req, res) => {
  const title = req.params.title;
  const jsonData = fs.readFileSync("data.json", "utf-8");
  const posts = JSON.parse(jsonData);

  if (title === "*all") {
    res.send(posts);
  } else {
    const filteredPosts = posts.filter((i) =>
      i.title.toLowerCase().includes(title.toLowerCase())
    );
    res.send(filteredPosts);
  }
});

app.listen(port, (req, res) => {
  console.log(`Server running at port: ${port}`);
});
