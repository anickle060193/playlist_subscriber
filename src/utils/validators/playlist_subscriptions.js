'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=playlist_subscriptions */
    var vErrors = null;
    var errors = 0;
    if (Array.isArray(data)) {
      var errs__0 = errors;
      var valid0;
      for (var i0 = 0; i0 < data.length; i0++) {
        var errs_1 = errors;
        if (typeof data[i0] !== "string") {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '[' + i0 + ']',
            schemaPath: '#/items/type',
            params: {
              type: 'string'
            },
            message: 'should be string'
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
    } else {
      var err = {
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'array'
        },
        message: 'should be array'
      };
      if (vErrors === null) vErrors = [err];
      else vErrors.push(err);
      errors++;
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "$id": "playlist_subscriptions",
  "type": "array",
  "items": {
    "type": "string"
  }
};
validate.errors = null;
module.exports = validate;