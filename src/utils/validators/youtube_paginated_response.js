'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=youtube_paginated_response */
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      var data1 = data.kind;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'kind'
          },
          message: 'should have required property \'kind\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if (typeof data1 !== "string") {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.kind',
            schemaPath: '#/properties/kind/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.kind.type,
            parentSchema: validate.schema.properties.kind,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.etag;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'etag'
          },
          message: 'should have required property \'etag\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if (typeof data1 !== "string") {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.etag',
            schemaPath: '#/properties/etag/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.etag.type,
            parentSchema: validate.schema.properties.etag,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.pageInfo;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'pageInfo'
          },
          message: 'should have required property \'pageInfo\'',
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
          var data2 = data1.totalResults;
          if (data2 === undefined) {
            valid2 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.pageInfo',
              schemaPath: '#/properties/pageInfo/required',
              params: {
                missingProperty: 'totalResults'
              },
              message: 'should have required property \'totalResults\'',
              schema: validate.schema.properties.pageInfo.properties,
              parentSchema: validate.schema.properties.pageInfo,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_2 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.pageInfo.totalResults',
                schemaPath: '#/properties/pageInfo/properties/totalResults/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: validate.schema.properties.pageInfo.properties.totalResults.type,
                parentSchema: validate.schema.properties.pageInfo.properties.totalResults,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid2 = errors === errs_2;
          }
          var data2 = data1.resultsPerPage;
          if (data2 === undefined) {
            valid2 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.pageInfo',
              schemaPath: '#/properties/pageInfo/required',
              params: {
                missingProperty: 'resultsPerPage'
              },
              message: 'should have required property \'resultsPerPage\'',
              schema: validate.schema.properties.pageInfo.properties,
              parentSchema: validate.schema.properties.pageInfo,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_2 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.pageInfo.resultsPerPage',
                schemaPath: '#/properties/pageInfo/properties/resultsPerPage/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: validate.schema.properties.pageInfo.properties.resultsPerPage.type,
                parentSchema: validate.schema.properties.pageInfo.properties.resultsPerPage,
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
            dataPath: (dataPath || '') + '.pageInfo',
            schemaPath: '#/properties/pageInfo/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: validate.schema.properties.pageInfo.type,
            parentSchema: validate.schema.properties.pageInfo,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.items;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'items'
          },
          message: 'should have required property \'items\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if (!Array.isArray(data1)) {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.items',
            schemaPath: '#/properties/items/type',
            params: {
              type: 'array'
            },
            message: 'should be array',
            schema: validate.schema.properties.items.type,
            parentSchema: validate.schema.properties.items,
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
  "$id": "youtube_paginated_response",
  "type": "object",
  "required": ["kind", "etag", "pageInfo", "items"],
  "properties": {
    "kind": {
      "type": "string"
    },
    "etag": {
      "type": "string"
    },
    "pageInfo": {
      "type": "object",
      "required": ["totalResults", "resultsPerPage"],
      "properties": {
        "totalResults": {
          "type": "number"
        },
        "resultsPerPage": {
          "type": "number"
        }
      }
    },
    "items": {
      "type": "array"
    }
  }
};
validate.errors = null;
module.exports = validate;