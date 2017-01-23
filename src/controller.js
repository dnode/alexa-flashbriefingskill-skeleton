module.exports = ['get', ['/', (req, res) => {
  res.send([{
    uid: 'uid',
    updateDate: new Date().toISOString(),
    titleText: 'titleText',
    streamUrl: 'streamUrl',
    mainText: 'mainText',
    redirectionUrl: 'redirectionUrl',
  }]);
}]];
