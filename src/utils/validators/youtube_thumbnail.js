'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=youtube_thumbnail */
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      var data1 = data.url;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'url'
          },
          message: 'should have required property \'url\'',
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
            dataPath: (dataPath || '') + '.url',
            schemaPath: '#/properties/url/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.url.type,
            parentSchema: validate.schema.properties.url,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.width;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'width'
          },
          message: 'should have required property \'width\'',
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
            dataPath: (dataPath || '') + '.width',
            schemaPath: '#/properties/width/type',
            params: {
              type: 'number'
            },
            message: 'should be number',
            schema: validate.schema.properties.width.type,
            parentSchema: validate.schema.properties.width,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.height;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'height'
          },
          message: 'should have required property \'height\'',
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
            dataPath: (dataPath || '') + '.height',
            schemaPath: '#/properties/height/type',
            params: {
              type: 'number'
            },
            message: 'should be number',
            schema: validate.schema.properties.height.type,
            parentSchema: validate.schema.properties.height,
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
  "$id": "youtube_thumbnail",
  "type": "object",
  "required": ["url", "width", "height"],
  "properties": {
    "url": {
      "type": "string"
    },
    "width": {
      "type": "number"
    },
    "height": {
      "type": "number"
    }
  }
};
validate.errors = null;
module.exports = validate;