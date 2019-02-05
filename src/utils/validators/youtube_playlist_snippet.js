'use strict';
var validate = (function() {
  var refVal = [];
  var refVal1 = (function() {
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
  refVal1.schema = {
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
  refVal1.errors = null;
  refVal[1] = refVal1;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=youtube_playlist_snippet */
    var vErrors = null;
    var errors = 0;
    if (rootData === undefined) rootData = data;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      var data1 = data.publishedAt;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'publishedAt'
          },
          message: 'should have required property \'publishedAt\'',
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
            dataPath: (dataPath || '') + '.publishedAt',
            schemaPath: '#/properties/publishedAt/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.publishedAt.type,
            parentSchema: validate.schema.properties.publishedAt,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.channelId;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'channelId'
          },
          message: 'should have required property \'channelId\'',
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
            dataPath: (dataPath || '') + '.channelId',
            schemaPath: '#/properties/channelId/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.channelId.type,
            parentSchema: validate.schema.properties.channelId,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.title;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'title'
          },
          message: 'should have required property \'title\'',
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
            dataPath: (dataPath || '') + '.title',
            schemaPath: '#/properties/title/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.title.type,
            parentSchema: validate.schema.properties.title,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.description;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'description'
          },
          message: 'should have required property \'description\'',
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
            dataPath: (dataPath || '') + '.description',
            schemaPath: '#/properties/description/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.description.type,
            parentSchema: validate.schema.properties.description,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      if (data.thumbnails === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'thumbnails'
          },
          message: 'should have required property \'thumbnails\'',
          schema: validate.schema.properties,
          parentSchema: validate.schema,
          data: data
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
      } else {
        var errs_1 = errors;
        if (!refVal1(data.thumbnails, (dataPath || '') + '.thumbnails', data, 'thumbnails', rootData)) {
          if (vErrors === null) vErrors = refVal1.errors;
          else vErrors = vErrors.concat(refVal1.errors);
          errors = vErrors.length;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.channelTitle;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'channelTitle'
          },
          message: 'should have required property \'channelTitle\'',
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
            dataPath: (dataPath || '') + '.channelTitle',
            schemaPath: '#/properties/channelTitle/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.channelTitle.type,
            parentSchema: validate.schema.properties.channelTitle,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.localized;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'localized'
          },
          message: 'should have required property \'localized\'',
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
          var data2 = data1.title;
          if (data2 === undefined) {
            valid2 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.localized',
              schemaPath: '#/properties/localized/required',
              params: {
                missingProperty: 'title'
              },
              message: 'should have required property \'title\'',
              schema: validate.schema.properties.localized.properties,
              parentSchema: validate.schema.properties.localized,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_2 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.localized.title',
                schemaPath: '#/properties/localized/properties/title/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: validate.schema.properties.localized.properties.title.type,
                parentSchema: validate.schema.properties.localized.properties.title,
                data: data2
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid2 = errors === errs_2;
          }
          var data2 = data1.description;
          if (data2 === undefined) {
            valid2 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + '.localized',
              schemaPath: '#/properties/localized/required',
              params: {
                missingProperty: 'description'
              },
              message: 'should have required property \'description\'',
              schema: validate.schema.properties.localized.properties,
              parentSchema: validate.schema.properties.localized,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          } else {
            var errs_2 = errors;
            if (typeof data2 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.localized.description',
                schemaPath: '#/properties/localized/properties/description/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: validate.schema.properties.localized.properties.description.type,
                parentSchema: validate.schema.properties.localized.properties.description,
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
            dataPath: (dataPath || '') + '.localized',
            schemaPath: '#/properties/localized/type',
            params: {
              type: 'object'
            },
            message: 'should be object',
            schema: validate.schema.properties.localized.type,
            parentSchema: validate.schema.properties.localized,
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
  "$id": "youtube_playlist_snippet",
  "type": "object",
  "required": ["publishedAt", "channelId", "title", "description", "thumbnails", "channelTitle", "localized"],
  "properties": {
    "publishedAt": {
      "type": "string"
    },
    "channelId": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "thumbnails": {
      "$ref": "youtube_thumbnails"
    },
    "channelTitle": {
      "type": "string"
    },
    "localized": {
      "type": "object",
      "required": ["title", "description"],
      "properties": {
        "title": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      }
    }
  }
};
validate.errors = null;
module.exports = validate;