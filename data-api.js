var data = (function(){
  
  function DataApi(){}
 
  DataApi.prototype.load = function(options, cb) {
    console.log('loading data');
  }
  
  return new DataApi();
  
})();

