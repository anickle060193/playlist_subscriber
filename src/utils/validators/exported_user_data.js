'use strict';
var equal = require('ajv/lib/compile/equal');
var validate = (function() {
  var refVal = [];
  var refVal1 = {
    "$id": "exported_user_data_v1",
    "type": "object",
    "required": ["playlistSubscriptions"],
    "properties": {
      "playlistSubscriptions": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  };
  refVal[1] = refVal1;
  var refVal2 = {
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
  refVal[2] = refVal2;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=exported_user_data */
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      var data1 = data.version;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'version'
          },
          message: 'should have required property \'version\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if (typeof data1 !== "number") {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.version',
            schemaPath: '#/properties/version/type',
            params: {
              type: 'number'
            },
            message: 'should be number',
            schema: validate.schema.properties.version.type,
            parentSchema: validate.schema.properties.version,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.data;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'data'
          },
          message: 'should have required property \'data\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if ((!data1 || typeof data1 !== "object" || Array.isArray(data1))) {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.data',
            schemaPath: '#/properties/data/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: validate.schema.properties.data.type,
            parentSchema: validate.schema.properties.data,
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
    var errs__0 = errors,
      prevValid0 = false,
      valid0 = false,
      passingSchemas0 = null;
    var errs_1 = errors;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__1 = errors;
      var valid2 = true;
      var data1 = data.version;
      if (data1 !== undefined) {
        var errs_2 = errors;
        var schema2 = validate.schema.oneOf[0].properties.version.const;
        var valid2 = equal(data1, schema2);
        if (!valid2) {
          var err = {
            keyword: 'const',
            dataPath: (dataPath || '') + '.version',
            schemaPath: '#/oneOf/0/properties/version/const',
            params: {
              allowedValue: schema2
            },
            message: 'should be equal to constant',
            schema: validate.schema.oneOf[0].properties.version.const,
            parentSchema: validate.schema.oneOf[0].properties.version,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid2 = errors === errs_2;
      }
      var data1 = data.data;
      if (data1 !== undefined) {
        var errs_2 = errors;
        var errs_3 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__3 = errors;
          var valid4 = true;
          var data2 = data1.playlistSubscriptions;
          if (data2 === undefined) {
            valid4 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.data',
              schemaPath: 'exported_user_data_v1/required',
              params: {
                missingProperty: 'playlistSubscriptions'
              },
              message: 'should have required property \'playlistSubscriptions\'',
              schema: refVal1.properties,
              parentSchema: refVal1,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_4 = errors;
            if (Array.isArray(data2)) {
              var errs__4 = errors;
              var valid4;
              for (var i4 = 0; i4 < data2.length; i4++) {
                var data3 = data2[i4];
                var errs_5 = errors;
                if (typeof data3 !== "string") {
                  var err = {
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.data.playlistSubscriptions[' + i4 + ']',
                    schemaPath: 'exported_user_data_v1/properties/playlistSubscriptions/items/type',
                    params: {
                      type: 'string'
                    },
                    message: 'should be string',
                    schema: refVal1.properties.playlistSubscriptions.items.type,
                    parentSchema: refVal1.properties.playlistSubscriptions.items,
                    data: data3
                  };
                  if (vErrors === null) vErrors = [err];
                  else vErrors.push(err);
                  errors++;
                }
                var valid5 = errors === errs_5;
              }
            } else {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.data.playlistSubscriptions',
                schemaPath: 'exported_user_data_v1/properties/playlistSubscriptions/type',
                params: {
                  type: 'array'
                },
                message: 'should be array',
                schema: refVal1.properties.playlistSubscriptions.type,
                parentSchema: refVal1.properties.playlistSubscriptions,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid4 = errors === errs_4;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.data',
            schemaPath: 'exported_user_data_v1/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: refVal1.type,
            parentSchema: refVal1,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid3 = errors === errs_3;
        var valid2 = errors === errs_2;
      }
    }
    var valid1 = errors === errs_1;
    if (valid1) {
      valid0 = prevValid0 = true;
      passingSchemas0 = 0;
    }
    var errs_1 = errors;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__1 = errors;
      var valid2 = true;
      var data1 = data.version;
      if (data1 !== undefined) {
        var errs_2 = errors;
        var schema2 = validate.schema.oneOf[1].properties.version.const;
        var valid2 = equal(data1, schema2);
        if (!valid2) {
          var err = {
            keyword: 'const',
            dataPath: (dataPath || '') + '.version',
            schemaPath: '#/oneOf/1/properties/version/const',
            params: {
              allowedValue: schema2
            },
            message: 'should be equal to constant',
            schema: validate.schema.oneOf[1].properties.version.const,
            parentSchema: validate.schema.oneOf[1].properties.version,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid2 = errors === errs_2;
      }
      var data1 = data.data;
      if (data1 !== undefined) {
        var errs_2 = errors;
        var errs_3 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__3 = errors;
          var valid4 = true;
          var data2 = data1.playlistSubscriptions;
          if (data2 === undefined) {
            valid4 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.data',
              schemaPath: 'exported_user_data_v2/required',
              params: {
                missingProperty: 'playlistSubscriptions'
              },
              message: 'should have required property \'playlistSubscriptions\'',
              schema: refVal2.properties,
              parentSchema: refVal2,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_4 = errors;
            if (Array.isArray(data2)) {
              var errs__4 = errors;
              var valid4;
              for (var i4 = 0; i4 < data2.length; i4++) {
                var data3 = data2[i4];
                var errs_5 = errors;
                if (typeof data3 !== "string") {
                  var err = {
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.data.playlistSubscriptions[' + i4 + ']',
                    schemaPath: 'exported_user_data_v2/properties/playlistSubscriptions/items/type',
                    params: {
                      type: 'string'
                    },
                    message: 'should be string',
                    schema: refVal2.properties.playlistSubscriptions.items.type,
                    parentSchema: refVal2.properties.playlistSubscriptions.items,
                    data: data3
                  };
                  if (vErrors === null) vErrors = [err];
                  else vErrors.push(err);
                  errors++;
                }
                var valid5 = errors === errs_5;
              }
            } else {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.data.playlistSubscriptions',
                schemaPath: 'exported_user_data_v2/properties/playlistSubscriptions/type',
                params: {
                  type: 'array'
                },
                message: 'should be array',
                schema: refVal2.properties.playlistSubscriptions.type,
                parentSchema: refVal2.properties.playlistSubscriptions,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid4 = errors === errs_4;
          }
          var data2 = data1.hiddenPlaylistItems;
          if (data2 === undefined) {
            valid4 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.data',
              schemaPath: 'exported_user_data_v2/required',
              params: {
                missingProperty: 'hiddenPlaylistItems'
              },
              message: 'should have required property \'hiddenPlaylistItems\'',
              schema: refVal2.properties,
              parentSchema: refVal2,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_4 = errors;
            if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
              var errs__4 = errors;
              var valid5 = true;
              for (var key4 in data2) {
                var data3 = data2[key4];
                var errs_5 = errors;
                if (typeof data3 !== "boolean") {
                  var err = {
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.data.hiddenPlaylistItems[\'' + key4 + '\']',
                    schemaPath: 'exported_user_data_v2/properties/hiddenPlaylistItems/additionalProperties/type',
                    params: {
                      type: 'boolean'
                    },
                    message: 'should be boolean',
                    schema: refVal2.properties.hiddenPlaylistItems.additionalProperties.type,
                    parentSchema: refVal2.properties.hiddenPlaylistItems.additionalProperties,
                    data: data3
                  };
                  if (vErrors === null) vErrors = [err];
                  else vErrors.push(err);
                  errors++;
                }
                var valid5 = errors === errs_5;
              }
            } else {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.data.hiddenPlaylistItems',
                schemaPath: 'exported_user_data_v2/properties/hiddenPlaylistItems/type',
                params: {
                  type: 'object'
                },
                message: 'should be object',
                schema: refVal2.properties.hiddenPlaylistItems.type,
                parentSchema: refVal2.properties.hiddenPlaylistItems,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid4 = errors === errs_4;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.data',
            schemaPath: 'exported_user_data_v2/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: refVal2.type,
            parentSchema: refVal2,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid3 = errors === errs_3;
        var valid2 = errors === errs_2;
      }
    }
    var valid1 = errors === errs_1;
    if (valid1 && prevValid0) {
      valid0 = false;
      passingSchemas0 = [passingSchemas0, 1];
    } else {
      if (valid1) {
        valid0 = prevValid0 = true;
        passingSchemas0 = 1;
      }
    }
    if (!valid0) {
      var err = {
        keyword: 'oneOf',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/oneOf',
        params: {
          passingSchemas: passingSchemas0
        },
        message: 'should match exactly one schema in oneOf',
        schema: validate.schema.oneOf,
        parentSchema: validate.schema,
        data: data
      };
      if (vErrors === null) vErrors = [err];
      else vErrors.push(err);
      errors++;
    } else {
      errors = errs__0;
      if (vErrors !== null) {
        if (errs__0) vErrors.length = errs__0;
        else vErrors = null;
      }
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "$id": "exported_user_data",
  "type": "object",
  "required": ["version", "data"],
  "properties": {
    "version": {
      "type": "number"
    },
    "data": {
      "type": "object"
    }
  },
  "oneOf": [{
    "properties": {
      "version": {
        "const": 1
      },
      "data": {
        "$ref": "exported_user_data_v1"
      }
    }
  }, {
    "properties": {
      "version": {
        "const": 2
      },
      "data": {
        "$ref": "exported_user_data_v2"
      }
    }
  }]
};
validate.errors = null;
module.exports = validate;