const notFoundHandler = (req, res) => {
  console.log("i'm here----");
  res.status(404).json({
    status: "fail",
    message: "Page not found" 
  });
};

module.exports = notFoundHandler;
