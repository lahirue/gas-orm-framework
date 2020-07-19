const ERROR_EMAIL = 'prod.apps.notifications@sci.pdn.ac.lk';
const TIME_ZONE = 'Asia/Colombo';
const DATE_FORMAT = 'MM/dd/yyyy HH:mm:ss';
const UUID_FORMAT = 'MMddyyyyHHmmss';
const APP_NAME = 'Sample App Name';

let cKey = null;
let chunks = [];
class Utils {
  static ChunkyCache(cache, chunkSize) {
    return {
      put(key, value, timeout) {
        const json = JSON.stringify(value);
        const cSize = Math.floor(chunkSize / 2);
        let index = 0;
        while (index < json.length) {
          cKey = `${key}_${index}`;
          chunks.push(cKey);
          cache.put(cKey, json.substr(index, cSize), timeout + 5);
          index += cSize;
        }

        const superBlk = {
          chunkSize,
          chunks,
          length: json.length
        };
        cache.put(key, JSON.stringify(superBlk), timeout);
      },
      get(key) {
        const superBlkCache = cache.get(key);
        if (superBlkCache != null) {
          const superBlk = JSON.parse(superBlkCache);
          chunks = superBlk.chunks.map(function(cKey2) {
            return cache.get(cKey2);
          });
          if (
            chunks.every(function(c) {
              return c != null;
            })
          ) {
            return JSON.parse(chunks.join(''));
          }
        }
        return null;
      }
    };
  }

  static getDateFormat() {
    return DATE_FORMAT;
  }

  static getCurrentDate() {
    const date = Utilities.formatDate(new Date(), TIME_ZONE, DATE_FORMAT);
    return date;
  }

  static generateUUID() {
    const date = Utilities.formatDate(new Date(), TIME_ZONE, UUID_FORMAT);
    return `TR_${date}`;
  }

  static parseDate(dateValue) {
    const date = Utilities.formatDate(new Date(dateValue), TIME_ZONE, DATE_FORMAT);
    return date;
  }

  static getCurrentUser() {
    return Session.getActiveUser().getEmail();
  }

  static getAppName() {
    return APP_NAME;
  }

  static getSheetStructure() {
    return {
      range: 'A:M',
      count: '13',
      columns: {
        A: 'ID',
        B: 'NIC',
        C: 'RegNo',
        D: 'Incno',
        E: 'AppYear',
        F: 'Faculty',
        G: 'Course',
        H: 'Status',
        I: 'Idrequried',
        J: 'Idprinted',
        K: 'User',
        L: 'Crdate',
        M: 'Crtime'
      },
      arrayNames: [
        'ID',
        'NIC',
        'RegNo',
        'Incno',
        'AppYear',
        'Faculty',
        'Course',
        'Status',
        'Idrequried',
        'Idprinted',
        'User',
        'Crdate',
        'Crtime'
      ]
    };
  }

  static errHandler(e, strFunc) {
    let message = `${e.message}\n in file: ${e.fileName} on line: ${e.lineNumber}`;
    const subject = `${APP_NAME} ERROR OCCURED | FOS APPS |  ${strFunc}`;
    const errProps = JSON.stringify(this.onError);
    message = `${subject}\n${message}\n onError: ${errProps}`;
    GmailApp.sendEmail(ERROR_EMAIL, subject, message);
  }
}
export default Utils;
