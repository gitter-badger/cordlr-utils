const Cordlr_User = require('./lib/user.js')

class Cordlr_Utils {
  constructor () {
    this.user = new Cordlr_User()
  }
}

module.exports = Cordlr_Utils
