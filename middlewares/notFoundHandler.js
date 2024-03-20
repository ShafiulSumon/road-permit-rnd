const notFoundHandler = (req, res) => {
  console.log("i'm here----");
  res.status(404).json({
    message: "Page not found" 
  });
};

module.exports = notFoundHandler;
