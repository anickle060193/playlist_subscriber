'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=exported_user_data_v2 */
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      var data1 = data.playlistSubscriptions;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'playlistSubscriptions'
          },
          message: 'should have required property \'playlistSubscriptions\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if (Array.isArray(data1)) {
          var errs__1 = errors;
          var valid1;
          for (var i1 = 0; i1 < data1.length; i1++) {
            var data2 = data1[i1];
            var errs_2 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.playlistSubscriptions[' + i1 + ']',
                schemaPath: '#/properties/playlistSubscriptions/items/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: validate.schema.properties.playlistSubscriptions.items.type,
                parentSchema: validate.schema.properties.playlistSubscriptions.items,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid2 = errors === errs_2;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.playlistSubscriptions',
            schemaPath: '#/properties/playlistSubscriptions/type',
            params: {
              type: 'array'
            },
            message: 'should be array',
            schema: validate.schema.properties.playlistSubscriptions.type,
            parentSchema: validate.schema.properties.playlistSubscriptions,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.hiddenPlaylistItems;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'hiddenPlaylistItems'
          },
          message: 'should have required property \'hiddenPlaylistItems\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__1 = errors;
          var valid2 = true;
          for (var key1 in data1) {
            var data2 = data1[key1];
            var errs_2 = errors;
            if (typeof data2 !== "boolean") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.hiddenPlaylistItems[\'' + key1 + '\']',
                schemaPath: '#/properties/hiddenPlaylistItems/additionalProperties/type',
                params: {
                  type: 'boolean'
                },
                message: 'should be boolean',
                schema: validate.schema.properties.hiddenPlaylistItems.additionalProperties.type,
                parentSchema: validate.schema.properties.hiddenPlaylistItems.additionalProperties,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid2 = errors === errs_2;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.hiddenPlaylistItems',
            schemaPath: '#/properties/hiddenPlaylistItems/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: validate.schema.properties.hiddenPlaylistItems.type,
            parentSchema: validate.schema.properties.hiddenPlaylistItems,
            data: data1
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
          type: 'object'
        },
        message: 'should be object',
        schema: validate.schema.type,
        parentSchema: validate.schema,
        data: data
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
  "$id": "exported_user_data_v2",
  "type": "object",
  "required": ["playlistSubscriptions", "hiddenPlaylistItems"],
  "properties": {
    "playlistSubscriptions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "hiddenPlaylistItems": {
      "type": "object",
      "additionalProperties": {
        "type": "boolean"
      }
    }
  }
};
validate.errors = null;
module.exports = validate;