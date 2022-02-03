/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
class ServerAPI {

  static reportError({ errorName, stackTrace, creationTime }) {
    console.log({ errorName, stackTrace, creationTime })
  }

}
