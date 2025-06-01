import responseCode from "./response-code.js";
import responseMessage from "./response-message.js";

export class Util {
  static response({ code, msg, data }) {
    try {
      let result = {
        code,
      };
      if (msg) {
        result.msg = msg;
      } else {
        result.msg = responseMessage[code];
      }
      if (data) {
        result.data = data;
      }
      return result;
    } catch (error) {
      let result = {
        code: responseCode.INTERNAL_SERVER_ERROR,
        msg: responseMessage[code],
        data: {},
      };
      return result;
    }
  }
  static responseFormat({ code = 200, msg, data = {} }) {
    try {
      return { code, msg, data };
    } catch (error) {
      let result = {
        code: responseCode.INTERNAL_SERVER_ERROR,
        msg: responseMessage[code],
        data: {},
      };
    }
  }
};
