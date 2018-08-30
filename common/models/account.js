'use strict';

module.exports = function(Account) {
  /**
   * Downloads file
   * @param {Request} req - Request object
   * @param {Response} res - Response object
   * @param {Function} cb Callback function
   */
  Account.prototype.download = function(req, res, cb) {
    Account.app.models.MusicContainer.download('3', 'a.mp3', req, res, cb);
  };

  Account.remoteMethod('prototype.download', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'res', type: 'object', http: {source: 'res'}},
    ],
    returns: {arg: 'result', type: 'object'},
    http: {path: '/file', verb: 'get'},
    description: 'Downloads file.',
  });
};
