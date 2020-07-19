import Resources from './scripts/resources';

function doGet() {
  Resources.sampleExecution();
}

global.doGet = doGet;
