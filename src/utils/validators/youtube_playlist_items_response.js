'use strict';
var validate = (function() {
  var refVal = [];
  var refVal1 = (function() {
    var refVal = [];
    var refVal1 = (function() {
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
        'use strict'; /*# sourceURL=youtube_playlist_item_snippet */
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
          var data1 = data.playlistId;
          if (data1 === undefined) {
            valid1 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/required',
              params: {
                missingProperty: 'playlistId'
              },
              message: 'should have required property \'playlistId\'',
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
                dataPath: (dataPath || '') + '.playlistId',
                schemaPath: '#/properties/playlistId/type',
                params: {
                  type: 'string'
                },
                message: 'should be string',
                schema: validate.schema.properties.playlistId.type,
                parentSchema: validate.schema.properties.playlistId,
                data: data1
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid1 = errors === errs_1;
          }
          var data1 = data.position;
          if (data1 === undefined) {
            valid1 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/required',
              params: {
                missingProperty: 'position'
              },
              message: 'should have required property \'position\'',
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
                dataPath: (dataPath || '') + '.position',
                schemaPath: '#/properties/position/type',
                params: {
                  type: 'number'
                },
                message: 'should be number',
                schema: validate.schema.properties.position.type,
                parentSchema: validate.schema.properties.position,
                data: data1
              };
              if (vErrors === null) vErrors = [err];
              else vErrors.push(err);
              errors++;
            }
            var valid1 = errors === errs_1;
          }
          var data1 = data.resourceId;
          if (data1 === undefined) {
            valid1 = false;
            var err = {
              keyword: 'required',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/required',
              params: {
                missingProperty: 'resourceId'
              },
              message: 'should have required property \'resourceId\'',
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
              if (data1.videoId === undefined) {
                var err = {
                  keyword: 'required',
                  dataPath: (dataPath || '') + '.resourceId',
                  schemaPath: '#/properties/resourceId/required',
                  params: {
                    missingProperty: 'videoId'
                  },
                  message: 'should have required property \'videoId\'',
                  schema: validate.schema.properties.resourceId.required,
                  parentSchema: validate.schema.properties.resourceId,
                  data: data1
                };
                if (vErrors === null) vErrors = [err];
                else vErrors.push(err);
                errors++;
              }
              var errs__1 = errors;
              var valid2 = true;
              var data2 = data1.kind;
              if (data2 === undefined) {
                valid2 = false;
                var err = {
                  keyword: 'required',
                  dataPath: (dataPath || '') + '.resourceId',
                  schemaPath: '#/properties/resourceId/required',
                  params: {
                    missingProperty: 'kind'
                  },
                  message: 'should have required property \'kind\'',
                  schema: validate.schema.properties.resourceId.properties,
                  parentSchema: validate.schema.properties.resourceId,
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
                    dataPath: (dataPath || '') + '.resourceId.kind',
                    schemaPath: '#/properties/resourceId/properties/kind/type',
                    params: {
                      type: 'string'
                    },
                    message: 'should be string',
                    schema: validate.schema.properties.resourceId.properties.kind.type,
                    parentSchema: validate.schema.properties.resourceId.properties.kind,
                    data: data2
                  };
                  if (vErrors === null) vErrors = [err];
                  else vErrors.push(err);
                  errors++;
                }
                var valid2 = errors === errs_2;
              }
              var data2 = data1.videoid;
              if (data2 !== undefined) {
                var errs_2 = errors;
                if (typeof data2 !== "string") {
                  var err = {
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.resourceId.videoid',
                    schemaPath: '#/properties/resourceId/properties/videoid/type',
                    params: {
                      type: 'string'
                    },
                    message: 'should be string',
                    schema: validate.schema.properties.resourceId.properties.videoid.type,
                    parentSchema: validate.schema.properties.resourceId.properties.videoid,
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
                dataPath: (dataPath || '') + '.resourceId',
                schemaPath: '#/properties/resourceId/type',
                params: {
                  type: 'object'
                },
                message: 'should be object',
                schema: validate.schema.properties.resourceId.type,
                parentSchema: validate.schema.properties.resourceId,
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
    refVal1.schema = {
      "$id": "youtube_playlist_item_snippet",
      "type": "object",
      "required": ["publishedAt", "channelId", "title", "description", "thumbnails", "channelTitle", "playlistId", "position", "resourceId"],
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
        "playlistId": {
          "type": "string"
        },
        "position": {
          "type": "number"
        },
        "resourceId": {
          "type": "object",
          "required": ["kind", "videoId"],
          "properties": {
            "kind": {
              "type": "string"
            },
            "videoid": {
              "type": "string"
            }
          }
        }
      }
    };
    refVal1.errors = null;
    refVal[1] = refVal1;
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict'; /*# sourceURL=youtube_playlist_item */
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
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
        var data1 = data.id;
        if (data1 === undefined) {
          valid1 = false;
          var err = {
            keyword: 'required',
            dataPath: (dataPath || '') + "",
            schemaPath: '#/required',
            params: {
              missingProperty: 'id'
            },
            message: 'should have required property \'id\'',
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
              dataPath: (dataPath || '') + '.id',
              schemaPath: '#/properties/id/type',
              params: {
                type: 'string'
              },
              message: 'should be string',
              schema: validate.schema.properties.id.type,
              parentSchema: validate.schema.properties.id,
              data: data1
            };
            if (vErrors === null) vErrors = [err];
            else vErrors.push(err);
            errors++;
          }
          var valid1 = errors === errs_1;
        }
        if (data.snippet === undefined) {
          valid1 = false;
          var err = {
            keyword: 'required',
            dataPath: (dataPath || '') + "",
            schemaPath: '#/required',
            params: {
              missingProperty: 'snippet'
            },
            message: 'should have required property \'snippet\'',
            schema: validate.schema.properties,
            parentSchema: validate.schema,
            data: data
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        } else {
          var errs_1 = errors;
          if (!refVal1(data.snippet, (dataPath || '') + '.snippet', data, 'snippet', rootData)) {
            if (vErrors === null) vErrors = refVal1.errors;
            else vErrors = vErrors.concat(refVal1.errors);
            errors = vErrors.length;
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
  refVal1.schema = {
    "$id": "youtube_playlist_item",
    "type": "object",
    "required": ["kind", "etag", "id", "snippet"],
    "properties": {
      "kind": {
        "type": "string"
      },
      "etag": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "snippet": {
        "$ref": "youtube_playlist_item_snippet"
      }
    }
  };
  refVal1.errors = null;
  refVal[1] = refVal1;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=youtube_playlist_items_response */
    var vErrors = null;
    var errors = 0;
    if (rootData === undefined) rootData = data;
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
        if (Array.isArray(data1)) {
          var errs__1 = errors;
          var valid1;
          for (var i1 = 0; i1 < data1.length; i1++) {
            var errs_2 = errors;
            if (!refVal1(data1[i1], (dataPath || '') + '.items[' + i1 + ']', data1, i1, rootData)) {
              if (vErrors === null) vErrors = refVal1.errors;
              else vErrors = vErrors.concat(refVal1.errors);
              errors = vErrors.length;
            }
            var valid2 = errors === errs_2;
          }
        } else {
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
  "$id": "youtube_playlist_items_response",
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
      "type": "array",
      "items": {
        "$ref": "youtube_playlist_item"
      }
    }
  }
};
validate.errors = null;
module.exports = validate;