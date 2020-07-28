import DatabaseOperations from './DBOperations';

class Resources {
  /**
   * Executing CRUD Operation Testcases
   */

  static createRecordOnlyTestCase() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
      DatabaseOperations.openDatabaseConnection('mytable');
      const sampleJsonData = {
        ID: '=ROW()',
        NIC: '800348997V',
        RegNo: 'S/10/888',
        Incno: '2',
        AppYear: '2000',
        Faculty: '22',
        Course: '101',
        Status: 'REGISTERED',
        Idrequried: '0',
        Idprinted: '0',
        User: 'USER',
        Crdate: '2015-07-24',
        Crtime: '12:30:00'
      };
      return DatabaseOperations.saveItem(sampleJsonData);
    } catch {
      return false;
    }
  }

  static readRecordTestCase() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
      DatabaseOperations.openDatabaseConnection('mytable');
      const foundObj = DatabaseOperations.queryDatabase('KEY:NIC === "800348997V"');
      if (foundObj.NIC === '800348997V') {
        return true;
      }
      return false;
    } catch (e) {
      console.log('Error read : ', e);
      return false;
    }
  }

  static queryRecordTestCase() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
      DatabaseOperations.openDatabaseConnection('mytable');
      const foundObj = DatabaseOperations.googleQuery("SELECT * WHERE Faculty = '44'");
      if (foundObj.NIC === '92165444V') {
        return true;
      }
      return false;
    } catch (e) {
      console.log('Error read query : ', e);
      return false;
    }
  }

  static batchUpdateTestCase() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
      DatabaseOperations.openDatabaseConnection('mytable');
      const foundObj = DatabaseOperations.googleQuery("SELECT * WHERE User = 'ADMIN'");
      if (foundObj && foundObj.length === 2) {
        foundObj[0].Status = 'NEW';
        foundObj[1].Status = 'NEW';
        DatabaseOperations.batchUpdate(foundObj);
        const foundObj2 = DatabaseOperations.googleQuery("SELECT * WHERE User = 'ADMIN'");
        if (foundObj2 && foundObj2.length === 2) {
          if (foundObj2[0].Status === 'NEW' && foundObj2[1].Status === 'NEW') {
            return true;
          }
        }
      }
      return false;
    } catch (e) {
      console.log('Error batch update query : ', e);
      return false;
    }
  }

  static updateRecordTestCase() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
      DatabaseOperations.openDatabaseConnection('mytable');
      const foundObj = DatabaseOperations.queryDatabase('KEY:NIC === "800348997V"');
      if (foundObj.NIC === '800348997V') {
        const newObject = DatabaseOperations.cloneObject(foundObj);
        newObject.NIC = '700348997V';
        DatabaseOperations.updateItem(foundObj, newObject);
        const foundObjNew = DatabaseOperations.queryDatabase('KEY:NIC === "700348997V"');
        if (foundObjNew.NIC === '700348997V') {
          return true;
        }
        return false;
      }
      return false;
    } catch (e) {
      console.log('Error update : ', e);
      return false;
    }
  }

  static updateRecordDirectTestCase() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
      DatabaseOperations.openDatabaseConnection('mytable');
      const foundObj = DatabaseOperations.queryDatabase('KEY:NIC === "700348997V"');
      if (foundObj.NIC === '700348997V') {
        const newObject = DatabaseOperations.cloneObject(foundObj);
        newObject.NIC = '600348997V';
        DatabaseOperations.updateDirect(newObject);
        const foundObjNew = DatabaseOperations.queryDatabase('KEY:NIC === "600348997V"');
        if (foundObjNew.NIC === '600348997V') {
          return true;
        }
        return false;
      }
      return false;
    } catch (e) {
      console.log('Error update : ', e);
      return false;
    }
  }

  static deleteRecordThredSafeTestCase() {
    try {
      DatabaseOperations.cacheEnabled = false;
      DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
      DatabaseOperations.openDatabaseConnection('mytable');
      const foundObj = DatabaseOperations.queryDatabase('KEY:NIC === "600348997V"');
      if (foundObj.NIC === '600348997V') {
        DatabaseOperations.deleteThreadSafe(foundObj);
        const foundObjNew = DatabaseOperations.queryDatabase('KEY:NIC === "600348997V"');
        if (foundObjNew && foundObjNew.NIC === '600348997V') {
          return false;
        }
        return true;
      }
      return false;
    } catch (e) {
      console.log('Error delete : ', e);
      return false;
    }
  }

  static sampleExecution() {
    DatabaseOperations.cacheEnabled = false;
    DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
    DatabaseOperations.openDatabaseConnection('mytable');
    // const foundObj = DatabaseOperations.queryDatabase('NIC === "966470100V"');
    // const foundObj = DatabaseOperations.queryDatabase('KEY:NIC === "92165445V" && KEY:RegNo === "S/10/586"');
    // refer more details for this query |  https://developers.google.com/chart/interactive/docs/querylanguage
    // DatabaseOperations.googleQuery("SELECT ID , NIC , RegNo WHERE NIC = '92165444V'");
    const data = DatabaseOperations.googleQuery("SELECT * WHERE Faculty = '44'");
    console.log(`ret data res :${JSON.stringify(data)}`);
    // data[0].Course = '1999';
    // data[1].Course = '1999';
    // DatabaseOperations.batchUpdate(data);
    //
    // queryDatabaseUpdated
    // const newObject = DatabaseOperations.cloneObject(foundObj);
    // newObject.RegNo = 'S/10/588';

    // DatabaseOperations.updateItem(foundObj, newObject);
    // DatabaseOperations.deleteItem(foundObj);

    // foundObj.RegNo = 'S/10/587';
    // DatabaseOperations.saveItem(foundObj);
    // console.log(`found item : ${JSON.stringify(foundObj)}`);
  }
}

export default Resources;
