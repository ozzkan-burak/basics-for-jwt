const notFound = (req, res) => {
  res.status(404).json({ msg: 'Route does not exixst' });
}

module.exports = notFound;