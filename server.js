const http = require("http"); // http ni chaqirish
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://ilhomtemirov9601:QCh3lFIvpqwLO1g3@cluster0.g5mvq6d.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
if(err) console.log("ERROR on connection MongoDB");
else {
    console.log("MongoDB connection succeed");
    module.exports = client;

    const app = require("./app");
    const PORT = process.env.PORT || 2000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
    });
}
});

// const server = http.createServer(app);
// let PORT = 3000; // partda 
// server.listen(PORT, function() {
//     console.log(`the server is running successFull on post: ${PORT}`);
// });

 