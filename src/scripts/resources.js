import DatabaseOperations from './DBOperations';

class Resources {
  static sampleExecution() {
    DatabaseOperations.cacheEnabled = false;
    DatabaseOperations.initilizeDatabase('1uM-QIUoCSRJcrhx3THBmDajxUbaxiOdMRYpiBoill-Q');
    DatabaseOperations.openDatabaseConnection('mytable');
    // const foundObj = DatabaseOperations.queryDatabase('NIC === "966470100V"');
    // const foundObj = DatabaseOperations.queryDatabase('KEY:NIC === "92165445V" && KEY:RegNo === "S/10/586"');
    // refer more details for this query |  https://developers.google.com/chart/interactive/docs/querylanguage
    DatabaseOperations.googleQuery("SELECT ID , NIC , RegNo WHERE NIC = '92165444V'");
    //DatabaseOperations.googleQuery("SELECT * WHERE NIC = '92165444V'");
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
