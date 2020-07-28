import Resources from './scripts/resources';

// comment generated this method and uncomment bellow doGet with the parameter
// Qunit is not identifiable
function doGet() {
  // Resources.createRecordOnlyTestCase();
  Resources.sampleExecution();
}

/*
function doGet(e) {
  QUnit.urlParams( e.parameter );
  QUnit.config({ title: "GAS Framework FOS Unit Tests" });
  QUnit.load( testCases );
  return QUnit.getHtml();
  
  
}

QUnit.helpers(this);
                                              
function testCases() {
  test('Create Record Only',1, function() {
    ok(_scripts_resources__WEBPACK_IMPORTED_MODULE_0__["default"].createRecordOnlyTestCase());
  });

  test('Read Record TestCase',1, function() {
    ok(_scripts_resources__WEBPACK_IMPORTED_MODULE_0__["default"].readRecordTestCase());
  });
  
    test('Read Query TestCase',1, function() {
    ok(_scripts_resources__WEBPACK_IMPORTED_MODULE_0__["default"].queryRecordTestCase());
  });
  
      test('Batch Update Query TestCase',1, function() {
    ok(_scripts_resources__WEBPACK_IMPORTED_MODULE_0__["default"].batchUpdateTestCase());
  });
  
  
    test('Update Record TestCase',1, function() {
    ok(_scripts_resources__WEBPACK_IMPORTED_MODULE_0__["default"].updateRecordTestCase());
  });
  
    test('Update Direct Record TestCase',1, function() {
    ok(_scripts_resources__WEBPACK_IMPORTED_MODULE_0__["default"].updateRecordDirectTestCase());
  });
  
    test('Delete Record ThreadSafe TestCase',1,function() {
    ok(_scripts_resources__WEBPACK_IMPORTED_MODULE_0__["default"].deleteRecordThredSafeTestCase());
  });
} */

global.doGet = doGet;
