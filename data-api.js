
  
  var data = (function(){
  
  function DataApi(){}

    DataApi.prototype.load = function(opts, cb) {
      
      var endpoint = "http://ec2-54-234-149-129.compute-1.amazonaws.com:8088/superset/explore_json/table/"+opts.table+"/?csv=true&form_data="
      
      var options = {
        row_limit: null,
        page_length: 0,
        include_search: false,
        table_filter: false
      };
      
      options.datasource = opts.table + "__table"
      options.viz_type='table';
      options.granularity_sqla = (opts.granularity_sqla || 'report_ts');
      options.time_grain_sqla = (opts.time_grain_sqla || "Time Column");
      options.since = opts.since || '100 years ago';
      options.until = opts.until || 'now';
      options.groupBy = opts.groups || [];
      options.metrics = opts.metrics || [];
      options.include_time = opts.include_time || true;
      options.order_by_cols = opts.order_by_cols || [];
      options.where = opts.where || "";
      options.having = opts.having || "";
      options.filters = opts.filters || "";
      options.table_time_stamp_format = opts.timestamp_format || '%Y-%m-%d %H:%M:%S'
      
      endpoint += encodeURIComponent(JSON.stringify(options));
      d3.csv(endpoint, function(data) {
      	cb(data);
      });
    }

    return new DataApi();

  })();
  
