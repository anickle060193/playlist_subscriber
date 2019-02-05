'use strict';
var validate = (function() {
  var refVal = [];
  var refVal1 = {
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
  refVal[1] = refVal1;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=youtube_thumbnails */
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      for (var key0 in data) {
        var isAdditional0 = !(false || key0 == 'default' || key0 == 'medium' || key0 == 'high' || key0 == 'standard' || key0 == 'maxres');
        if (isAdditional0) {
          valid1 = false;
          var err = {
            keyword: 'additionalProperties',
            dataPath: (dataPath || '') + "",
            schemaPath: '#/additionalProperties',
            params: {
              additionalProperty: '' + key0 + ''
            },
            message: 'should NOT have additional properties',
            schema: false,
            parentSchema: validate.schema,
            data: data
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
      }
      var data1 = data.default;
      if (data1 !== undefined) {
        var errs_1 = errors;
        var errs_2 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__2 = errors;
          var valid3 = true;
          var data2 = data1.url;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.default',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'url'
              },
              message: 'should have required property \'url\'',
              schema: refVal1.properties,
              parentSchema: refVal1,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.default.url',
                schemaPath: 'youtube_thumbnail/properties/url/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: refVal1.properties.url.type,
                parentSchema: refVal1.properties.url,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.width;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.default',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'width'
              },
              message: 'should have required property \'width\'',
              schema: refVal1.properties,
              parentSchema: refVal1,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.default.width',
                schemaPath: 'youtube_thumbnail/properties/width/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal1.properties.width.type,
                parentSchema: refVal1.properties.width,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.height;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.default',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'height'
              },
              message: 'should have required property \'height\'',
              schema: refVal1.properties,
              parentSchema: refVal1,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.default.height',
                schemaPath: 'youtube_thumbnail/properties/height/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal1.properties.height.type,
                parentSchema: refVal1.properties.height,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.default',
            schemaPath: 'youtube_thumbnail/type',
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
        var valid2 = errors === errs_2;
        var valid1 = errors === errs_1;
      }
      var data1 = data.medium;
      if (data1 !== undefined) {
        var errs_1 = errors;
        var errs_2 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__2 = errors;
          var valid3 = true;
          var data2 = data1.url;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.medium',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'url'
              },
              message: 'should have required property \'url\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.medium.url',
                schemaPath: 'youtube_thumbnail/properties/url/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: refVal[1].properties.url.type,
                parentSchema: refVal[1].properties.url,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.width;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.medium',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'width'
              },
              message: 'should have required property \'width\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.medium.width',
                schemaPath: 'youtube_thumbnail/properties/width/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.width.type,
                parentSchema: refVal[1].properties.width,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.height;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.medium',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'height'
              },
              message: 'should have required property \'height\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.medium.height',
                schemaPath: 'youtube_thumbnail/properties/height/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.height.type,
                parentSchema: refVal[1].properties.height,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.medium',
            schemaPath: 'youtube_thumbnail/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: refVal[1].type,
            parentSchema: refVal[1],
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid2 = errors === errs_2;
        var valid1 = errors === errs_1;
      }
      var data1 = data.high;
      if (data1 !== undefined) {
        var errs_1 = errors;
        var errs_2 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__2 = errors;
          var valid3 = true;
          var data2 = data1.url;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.high',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'url'
              },
              message: 'should have required property \'url\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.high.url',
                schemaPath: 'youtube_thumbnail/properties/url/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: refVal[1].properties.url.type,
                parentSchema: refVal[1].properties.url,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.width;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.high',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'width'
              },
              message: 'should have required property \'width\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.high.width',
                schemaPath: 'youtube_thumbnail/properties/width/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.width.type,
                parentSchema: refVal[1].properties.width,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.height;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.high',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'height'
              },
              message: 'should have required property \'height\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.high.height',
                schemaPath: 'youtube_thumbnail/properties/height/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.height.type,
                parentSchema: refVal[1].properties.height,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.high',
            schemaPath: 'youtube_thumbnail/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: refVal[1].type,
            parentSchema: refVal[1],
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid2 = errors === errs_2;
        var valid1 = errors === errs_1;
      }
      var data1 = data.standard;
      if (data1 !== undefined) {
        var errs_1 = errors;
        var errs_2 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__2 = errors;
          var valid3 = true;
          var data2 = data1.url;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.standard',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'url'
              },
              message: 'should have required property \'url\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.standard.url',
                schemaPath: 'youtube_thumbnail/properties/url/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: refVal[1].properties.url.type,
                parentSchema: refVal[1].properties.url,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.width;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.standard',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'width'
              },
              message: 'should have required property \'width\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.standard.width',
                schemaPath: 'youtube_thumbnail/properties/width/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.width.type,
                parentSchema: refVal[1].properties.width,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.height;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.standard',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'height'
              },
              message: 'should have required property \'height\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.standard.height',
                schemaPath: 'youtube_thumbnail/properties/height/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.height.type,
                parentSchema: refVal[1].properties.height,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.standard',
            schemaPath: 'youtube_thumbnail/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: refVal[1].type,
            parentSchema: refVal[1],
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid2 = errors === errs_2;
        var valid1 = errors === errs_1;
      }
      var data1 = data.maxres;
      if (data1 !== undefined) {
        var errs_1 = errors;
        var errs_2 = errors;
        if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
          var errs__2 = errors;
          var valid3 = true;
          var data2 = data1.url;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.maxres',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'url'
              },
              message: 'should have required property \'url\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.maxres.url',
                schemaPath: 'youtube_thumbnail/properties/url/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: refVal[1].properties.url.type,
                parentSchema: refVal[1].properties.url,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.width;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.maxres',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'width'
              },
              message: 'should have required property \'width\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.maxres.width',
                schemaPath: 'youtube_thumbnail/properties/width/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.width.type,
                parentSchema: refVal[1].properties.width,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
          var data2 = data1.height;
          if (data2 === undefined) {
            valid3 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.maxres',
              schemaPath: 'youtube_thumbnail/required',
              params: {
                missingProperty: 'height'
              },
              message: 'should have required property \'height\'',
              schema: refVal[1].properties,
              parentSchema: refVal[1],
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_3 = errors;
            if (typeof data2 !== "number") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.maxres.height',
                schemaPath: 'youtube_thumbnail/properties/height/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: refVal[1].properties.height.type,
                parentSchema: refVal[1].properties.height,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid3 = errors === errs_3;
          }
        } else {
          var err = {
            keyword: 'type',
            dataPath: (dataPath || '') + '.maxres',
            schemaPath: 'youtube_thumbnail/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: refVal[1].type,
            parentSchema: refVal[1],
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid2 = errors === errs_2;
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
  "$id": "youtube_thumbnails",
  "type": "object",
  "properties": {
    "default": {
      "$ref": "youtube_thumbnail"
    },
    "medium": {
      "$ref": "youtube_thumbnail"
    },
    "high": {
      "$ref": "youtube_thumbnail"
    },
    "standard": {
      "$ref": "youtube_thumbnail"
    },
    "maxres": {
      "$ref": "youtube_thumbnail"
    }
  },
  "additionalProperties": false
};
validate.errors = null;
module.exports = validate;