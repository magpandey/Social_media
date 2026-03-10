const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure temp directory exists
const tempDir = "./public/temp";
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, tempDir);
    },
    filename: function(req, file, cb) {
        // Use file.originalname (the actual filename)
        // Add timestamp to avoid duplicates
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });
module.exports = upload;