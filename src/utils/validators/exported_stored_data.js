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
  var refVal3 = {
    "$id": "exported_user_data_v3",
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
        "set": "string"
      }
    }
  };
  refVal[3] = refVal3;
  var refVal4 = {
    "$id": "exported_user_data_v4",
    "type": "object",
    "required": ["user", "settings"],
    "properties": {
      "user": {
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
            "set": "string"
          }
        }
      },
      "settings": {
        "type": "object",
        "required": ["useDarkTheme"],
        "properties": {
          "useDarkTheme": {
            "type": "boolean"
          }
        }
      }
    }
  };
  refVal[4] = refVal4;
  var refVal5 = {
    "$id": "exported_user_data_v5",
    "type": "object",
    "required": ["user", "settings"],
    "properties": {
      "user": {
        "type": "object",
        "required": ["playlistSubscriptions", "hiddenPlaylistItems", "watchedVideos"],
        "properties": {
          "playlistSubscriptions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "hiddenPlaylistItems": {
            "set": "string"
          },
          "watchedVideos": {
            "set": "string"
          }
        }
      },
      "settings": {
        "type": "object",
        "required": ["useDarkTheme", "markVideoWatchedOnOpen"],
        "properties": {
          "useDarkTheme": {
            "type": "boolean"
          },
          "markVideoWatchedOnOpen": {
            "type": "boolean"
          }
        }
      }
    }
  };
  refVal[5] = refVal5;
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
    var errs__0 = errors;
    var valid0 = false;
    var errs_1 = errors;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__1 = errors;
      var valid2 = true;
      var data1 = data.version;
      if (data1 !== undefined) {
        var errs_2 = errors;
        var schema2 = validate.schema.anyOf[0].properties.version.const;
        var valid2 = equal(data1, schema2);
        if (!valid2) {
          var err = {
            keyword: 'const',
            dataPath: (dataPath || '') + '.version',
            schemaPath: '#/anyOf/0/properties/version/const',
            params: {
              allowedValue: schema2
            },
            message: 'should be equal to constant',
            schema: validate.schema.anyOf[0].properties.version.const,
            parentSchema: validate.schema.anyOf[0].properties.version,
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
    valid0 = valid0 || valid1;
    if (!valid0) {
      var errs_1 = errors;
      if ((data && typeof data === "object" && !Array.isArray(data))) {
        var errs__1 = errors;
        var valid2 = true;
        var data1 = data.version;
        if (data1 !== undefined) {
          var errs_2 = errors;
          var schema2 = validate.schema.anyOf[1].properties.version.const;
          var valid2 = equal(data1, schema2);
          if (!valid2) {
            var err = {
              keyword: 'const',
              dataPath: (dataPath || '') + '.version',
              schemaPath: '#/anyOf/1/properties/version/const',
              params: {
                allowedValue: schema2
              },
              message: 'should be equal to constant',
              schema: validate.schema.anyOf[1].properties.version.const,
              parentSchema: validate.schema.anyOf[1].properties.version,
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
      valid0 = valid0 || valid1;
      if (!valid0) {
        var errs_1 = errors;
        if ((data && typeof data === "object" && !Array.isArray(data))) {
          var errs__1 = errors;
          var valid2 = true;
          var data1 = data.version;
          if (data1 !== undefined) {
            var errs_2 = errors;
            var schema2 = validate.schema.anyOf[2].properties.version.const;
            var valid2 = equal(data1, schema2);
            if (!valid2) {
              var err = {
                keyword: 'const',
                dataPath: (dataPath || '') + '.version',
                schemaPath: '#/anyOf/2/properties/version/const',
                params: {
                  allowedValue: schema2
                },
                message: 'should be equal to constant',
                schema: validate.schema.anyOf[2].properties.version.const,
                parentSchema: validate.schema.anyOf[2].properties.version,
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
                  schemaPath: 'exported_user_data_v3/required',
                  params: {
                    missingProperty: 'playlistSubscriptions'
                  },
                  message: 'should have required property \'playlistSubscriptions\'',
                  schema: refVal3.properties,
                  parentSchema: refVal3,
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
                        schemaPath: 'exported_user_data_v3/properties/playlistSubscriptions/items/type',
                        params: {
                          type: 'string'
                        },
                        message: 'should be string',
                        schema: refVal3.properties.playlistSubscriptions.items.type,
                        parentSchema: refVal3.properties.playlistSubscriptions.items,
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
                    schemaPath: 'exported_user_data_v3/properties/playlistSubscriptions/type',
                    params: {
                      type: 'array'
                    },
                    message: 'should be array',
                    schema: refVal3.properties.playlistSubscriptions.type,
                    parentSchema: refVal3.properties.playlistSubscriptions,
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
                  schemaPath: 'exported_user_data_v3/required',
                  params: {
                    missingProperty: 'hiddenPlaylistItems'
                  },
                  message: 'should have required property \'hiddenPlaylistItems\'',
                  schema: refVal3.properties,
                  parentSchema: refVal3,
                  data: data1
                };
                if (vErrors === null) vErrors = [err];
                else vErrors.push(err);
                errors++;
              } else {
                var errs_4 = errors;
                if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                  var errs__4 = errors;
                  var valid4;
                  valid4 = data2 instanceof Set && Array.from(data2).every((d) => typeof d === 'string');
                  if (!valid4) {
                    if (errs__4 == errors) {
                      var err = {
                        keyword: 'set',
                        dataPath: (dataPath || '') + '.data.hiddenPlaylistItems',
                        schemaPath: 'exported_user_data_v3/properties/hiddenPlaylistItems/set',
                        params: {
                          keyword: 'set'
                        },
                        message: 'should pass "set" keyword validation',
                        schema: refVal3.properties.hiddenPlaylistItems.set,
                        parentSchema: refVal3.properties.hiddenPlaylistItems,
                        data: data2
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    } else {
                      for (var i4 = errs__4; i4 < errors; i4++) {
                        var ruleErr4 = vErrors[i4];
                        if (ruleErr4.dataPath === undefined) ruleErr4.dataPath = (dataPath || '') + '.data.hiddenPlaylistItems';
                        if (ruleErr4.schemaPath === undefined) {
                          ruleErr4.schemaPath = "exported_user_data_v3/properties/hiddenPlaylistItems/set";
                        }
                        ruleErr4.schema = refVal3.properties.hiddenPlaylistItems.set;
                        ruleErr4.data = data2;
                      }
                    }
                  }
                }
                var valid4 = errors === errs_4;
              }
            } else {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.data',
                schemaPath: 'exported_user_data_v3/type',
                params: {
                  type: 'object'
                },
                message: 'should be object',
                schema: refVal3.type,
                parentSchema: refVal3,
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
        valid0 = valid0 || valid1;
        if (!valid0) {
          var errs_1 = errors;
          if ((data && typeof data === "object" && !Array.isArray(data))) {
            var errs__1 = errors;
            var valid2 = true;
            var data1 = data.version;
            if (data1 !== undefined) {
              var errs_2 = errors;
              var schema2 = validate.schema.anyOf[3].properties.version.const;
              var valid2 = equal(data1, schema2);
              if (!valid2) {
                var err = {
                  keyword: 'const',
                  dataPath: (dataPath || '') + '.version',
                  schemaPath: '#/anyOf/3/properties/version/const',
                  params: {
                    allowedValue: schema2
                  },
                  message: 'should be equal to constant',
                  schema: validate.schema.anyOf[3].properties.version.const,
                  parentSchema: validate.schema.anyOf[3].properties.version,
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
                var data2 = data1.user;
                if (data2 === undefined) {
                  valid4 = false;
                  var err = {
                    keyword: 'required',
                    dataPath: (dataPath || '') + '.data',
                    schemaPath: 'exported_user_data_v4/required',
                    params: {
                      missingProperty: 'user'
                    },
                    message: 'should have required property \'user\'',
                    schema: refVal4.properties,
                    parentSchema: refVal4,
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
                    var data3 = data2.playlistSubscriptions;
                    if (data3 === undefined) {
                      valid5 = false;
                      var err = {
                        keyword: 'required',
                        dataPath: (dataPath || '') + '.data.user',
                        schemaPath: 'exported_user_data_v4/properties/user/required',
                        params: {
                          missingProperty: 'playlistSubscriptions'
                        },
                        message: 'should have required property \'playlistSubscriptions\'',
                        schema: refVal4.properties.user.properties,
                        parentSchema: refVal4.properties.user,
                        data: data2
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    } else {
                      var errs_5 = errors;
                      if (Array.isArray(data3)) {
                        var errs__5 = errors;
                        var valid5;
                        for (var i5 = 0; i5 < data3.length; i5++) {
                          var data4 = data3[i5];
                          var errs_6 = errors;
                          if (typeof data4 !== "string") {
                            var err = {
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.data.user.playlistSubscriptions[' + i5 + ']',
                              schemaPath: 'exported_user_data_v4/properties/user/properties/playlistSubscriptions/items/type',
                              params: {
                                type: 'string'
                              },
                              message: 'should be string',
                              schema: refVal4.properties.user.properties.playlistSubscriptions.items.type,
                              parentSchema: refVal4.properties.user.properties.playlistSubscriptions.items,
                              data: data4
                            };
                            if (vErrors === null) vErrors = [err];
                            else vErrors.push(err);
                            errors++;
                          }
                          var valid6 = errors === errs_6;
                        }
                      } else {
                        var err = {
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.data.user.playlistSubscriptions',
                          schemaPath: 'exported_user_data_v4/properties/user/properties/playlistSubscriptions/type',
                          params: {
                            type: 'array'
                          },
                          message: 'should be array',
                          schema: refVal4.properties.user.properties.playlistSubscriptions.type,
                          parentSchema: refVal4.properties.user.properties.playlistSubscriptions,
                          data: data3
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      }
                      var valid5 = errors === errs_5;
                    }
                    var data3 = data2.hiddenPlaylistItems;
                    if (data3 === undefined) {
                      valid5 = false;
                      var err = {
                        keyword: 'required',
                        dataPath: (dataPath || '') + '.data.user',
                        schemaPath: 'exported_user_data_v4/properties/user/required',
                        params: {
                          missingProperty: 'hiddenPlaylistItems'
                        },
                        message: 'should have required property \'hiddenPlaylistItems\'',
                        schema: refVal4.properties.user.properties,
                        parentSchema: refVal4.properties.user,
                        data: data2
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    } else {
                      var errs_5 = errors;
                      if ((data3 && typeof data3 === "object" && !Array.isArray(data3))) {
                        var errs__5 = errors;
                        var valid5;
                        valid5 = data3 instanceof Set && Array.from(data3).every((d) => typeof d === 'string');
                        if (!valid5) {
                          if (errs__5 == errors) {
                            var err = {
                              keyword: 'set',
                              dataPath: (dataPath || '') + '.data.user.hiddenPlaylistItems',
                              schemaPath: 'exported_user_data_v4/properties/user/properties/hiddenPlaylistItems/set',
                              params: {
                                keyword: 'set'
                              },
                              message: 'should pass "set" keyword validation',
                              schema: refVal4.properties.user.properties.hiddenPlaylistItems.set,
                              parentSchema: refVal4.properties.user.properties.hiddenPlaylistItems,
                              data: data3
                            };
                            if (vErrors === null) vErrors = [err];
                            else vErrors.push(err);
                            errors++;
                          } else {
                            for (var i5 = errs__5; i5 < errors; i5++) {
                              var ruleErr5 = vErrors[i5];
                              if (ruleErr5.dataPath === undefined) ruleErr5.dataPath = (dataPath || '') + '.data.user.hiddenPlaylistItems';
                              if (ruleErr5.schemaPath === undefined) {
                                ruleErr5.schemaPath = "exported_user_data_v4/properties/user/properties/hiddenPlaylistItems/set";
                              }
                              ruleErr5.schema = refVal4.properties.user.properties.hiddenPlaylistItems.set;
                              ruleErr5.data = data3;
                            }
                          }
                        }
                      }
                      var valid5 = errors === errs_5;
                    }
                  } else {
                    var err = {
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.data.user',
                      schemaPath: 'exported_user_data_v4/properties/user/type',
                      params: {
                        type: 'object'
                      },
                      message: 'should be object',
                      schema: refVal4.properties.user.type,
                      parentSchema: refVal4.properties.user,
                      data: data2
                    };
                    if (vErrors === null) vErrors = [err];
                    else vErrors.push(err);
                    errors++;
                  }
                  var valid4 = errors === errs_4;
                }
                var data2 = data1.settings;
                if (data2 === undefined) {
                  valid4 = false;
                  var err = {
                    keyword: 'required',
                    dataPath: (dataPath || '') + '.data',
                    schemaPath: 'exported_user_data_v4/required',
                    params: {
                      missingProperty: 'settings'
                    },
                    message: 'should have required property \'settings\'',
                    schema: refVal4.properties,
                    parentSchema: refVal4,
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
                    var data3 = data2.useDarkTheme;
                    if (data3 === undefined) {
                      valid5 = false;
                      var err = {
                        keyword: 'required',
                        dataPath: (dataPath || '') + '.data.settings',
                        schemaPath: 'exported_user_data_v4/properties/settings/required',
                        params: {
                          missingProperty: 'useDarkTheme'
                        },
                        message: 'should have required property \'useDarkTheme\'',
                        schema: refVal4.properties.settings.properties,
                        parentSchema: refVal4.properties.settings,
                        data: data2
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    } else {
                      var errs_5 = errors;
                      if (typeof data3 !== "boolean") {
                        var err = {
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.data.settings.useDarkTheme',
                          schemaPath: 'exported_user_data_v4/properties/settings/properties/useDarkTheme/type',
                          params: {
                            type: 'boolean'
                          },
                          message: 'should be boolean',
                          schema: refVal4.properties.settings.properties.useDarkTheme.type,
                          parentSchema: refVal4.properties.settings.properties.useDarkTheme,
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
                      dataPath: (dataPath || '') + '.data.settings',
                      schemaPath: 'exported_user_data_v4/properties/settings/type',
                      params: {
                        type: 'object'
                      },
                      message: 'should be object',
                      schema: refVal4.properties.settings.type,
                      parentSchema: refVal4.properties.settings,
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
                  schemaPath: 'exported_user_data_v4/type',
                  params: {
                    type: 'object'
                  },
                  message: 'should be object',
                  schema: refVal4.type,
                  parentSchema: refVal4,
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
          valid0 = valid0 || valid1;
          if (!valid0) {
            var errs_1 = errors;
            if ((data && typeof data === "object" && !Array.isArray(data))) {
              var errs__1 = errors;
              var valid2 = true;
              var data1 = data.version;
              if (data1 !== undefined) {
                var errs_2 = errors;
                var schema2 = validate.schema.anyOf[4].properties.version.const;
                var valid2 = equal(data1, schema2);
                if (!valid2) {
                  var err = {
                    keyword: 'const',
                    dataPath: (dataPath || '') + '.version',
                    schemaPath: '#/anyOf/4/properties/version/const',
                    params: {
                      allowedValue: schema2
                    },
                    message: 'should be equal to constant',
                    schema: validate.schema.anyOf[4].properties.version.const,
                    parentSchema: validate.schema.anyOf[4].properties.version,
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
                  var data2 = data1.user;
                  if (data2 === undefined) {
                    valid4 = false;
                    var err = {
                      keyword: 'required',
                      dataPath: (dataPath || '') + '.data',
                      schemaPath: 'exported_user_data_v5/required',
                      params: {
                        missingProperty: 'user'
                      },
                      message: 'should have required property \'user\'',
                      schema: refVal5.properties,
                      parentSchema: refVal5,
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
                      var data3 = data2.playlistSubscriptions;
                      if (data3 === undefined) {
                        valid5 = false;
                        var err = {
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.data.user',
                          schemaPath: 'exported_user_data_v5/properties/user/required',
                          params: {
                            missingProperty: 'playlistSubscriptions'
                          },
                          message: 'should have required property \'playlistSubscriptions\'',
                          schema: refVal5.properties.user.properties,
                          parentSchema: refVal5.properties.user,
                          data: data2
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      } else {
                        var errs_5 = errors;
                        if (Array.isArray(data3)) {
                          var errs__5 = errors;
                          var valid5;
                          for (var i5 = 0; i5 < data3.length; i5++) {
                            var data4 = data3[i5];
                            var errs_6 = errors;
                            if (typeof data4 !== "string") {
                              var err = {
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.data.user.playlistSubscriptions[' + i5 + ']',
                                schemaPath: 'exported_user_data_v5/properties/user/properties/playlistSubscriptions/items/type',
                                params: {
                                  type: 'string'
                                },
                                message: 'should be string',
                                schema: refVal5.properties.user.properties.playlistSubscriptions.items.type,
                                parentSchema: refVal5.properties.user.properties.playlistSubscriptions.items,
                                data: data4
                              };
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            }
                            var valid6 = errors === errs_6;
                          }
                        } else {
                          var err = {
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.data.user.playlistSubscriptions',
                            schemaPath: 'exported_user_data_v5/properties/user/properties/playlistSubscriptions/type',
                            params: {
                              type: 'array'
                            },
                            message: 'should be array',
                            schema: refVal5.properties.user.properties.playlistSubscriptions.type,
                            parentSchema: refVal5.properties.user.properties.playlistSubscriptions,
                            data: data3
                          };
                          if (vErrors === null) vErrors = [err];
                          else vErrors.push(err);
                          errors++;
                        }
                        var valid5 = errors === errs_5;
                      }
                      var data3 = data2.hiddenPlaylistItems;
                      if (data3 === undefined) {
                        valid5 = false;
                        var err = {
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.data.user',
                          schemaPath: 'exported_user_data_v5/properties/user/required',
                          params: {
                            missingProperty: 'hiddenPlaylistItems'
                          },
                          message: 'should have required property \'hiddenPlaylistItems\'',
                          schema: refVal5.properties.user.properties,
                          parentSchema: refVal5.properties.user,
                          data: data2
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      } else {
                        var errs_5 = errors;
                        if ((data3 && typeof data3 === "object" && !Array.isArray(data3))) {
                          var errs__5 = errors;
                          var valid5;
                          valid5 = data3 instanceof Set && Array.from(data3).every((d) => typeof d === 'string');
                          if (!valid5) {
                            if (errs__5 == errors) {
                              var err = {
                                keyword: 'set',
                                dataPath: (dataPath || '') + '.data.user.hiddenPlaylistItems',
                                schemaPath: 'exported_user_data_v5/properties/user/properties/hiddenPlaylistItems/set',
                                params: {
                                  keyword: 'set'
                                },
                                message: 'should pass "set" keyword validation',
                                schema: refVal5.properties.user.properties.hiddenPlaylistItems.set,
                                parentSchema: refVal5.properties.user.properties.hiddenPlaylistItems,
                                data: data3
                              };
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            } else {
                              for (var i5 = errs__5; i5 < errors; i5++) {
                                var ruleErr5 = vErrors[i5];
                                if (ruleErr5.dataPath === undefined) ruleErr5.dataPath = (dataPath || '') + '.data.user.hiddenPlaylistItems';
                                if (ruleErr5.schemaPath === undefined) {
                                  ruleErr5.schemaPath = "exported_user_data_v5/properties/user/properties/hiddenPlaylistItems/set";
                                }
                                ruleErr5.schema = refVal5.properties.user.properties.hiddenPlaylistItems.set;
                                ruleErr5.data = data3;
                              }
                            }
                          }
                        }
                        var valid5 = errors === errs_5;
                      }
                      var data3 = data2.watchedVideos;
                      if (data3 === undefined) {
                        valid5 = false;
                        var err = {
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.data.user',
                          schemaPath: 'exported_user_data_v5/properties/user/required',
                          params: {
                            missingProperty: 'watchedVideos'
                          },
                          message: 'should have required property \'watchedVideos\'',
                          schema: refVal5.properties.user.properties,
                          parentSchema: refVal5.properties.user,
                          data: data2
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      } else {
                        var errs_5 = errors;
                        if ((data3 && typeof data3 === "object" && !Array.isArray(data3))) {
                          var errs__5 = errors;
                          var valid5;
                          valid5 = data3 instanceof Set && Array.from(data3).every((d) => typeof d === 'string');
                          if (!valid5) {
                            if (errs__5 == errors) {
                              var err = {
                                keyword: 'set',
                                dataPath: (dataPath || '') + '.data.user.watchedVideos',
                                schemaPath: 'exported_user_data_v5/properties/user/properties/watchedVideos/set',
                                params: {
                                  keyword: 'set'
                                },
                                message: 'should pass "set" keyword validation',
                                schema: refVal5.properties.user.properties.watchedVideos.set,
                                parentSchema: refVal5.properties.user.properties.watchedVideos,
                                data: data3
                              };
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            } else {
                              for (var i5 = errs__5; i5 < errors; i5++) {
                                var ruleErr5 = vErrors[i5];
                                if (ruleErr5.dataPath === undefined) ruleErr5.dataPath = (dataPath || '') + '.data.user.watchedVideos';
                                if (ruleErr5.schemaPath === undefined) {
                                  ruleErr5.schemaPath = "exported_user_data_v5/properties/user/properties/watchedVideos/set";
                                }
                                ruleErr5.schema = refVal5.properties.user.properties.watchedVideos.set;
                                ruleErr5.data = data3;
                              }
                            }
                          }
                        }
                        var valid5 = errors === errs_5;
                      }
                    } else {
                      var err = {
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.data.user',
                        schemaPath: 'exported_user_data_v5/properties/user/type',
                        params: {
                          type: 'object'
                        },
                        message: 'should be object',
                        schema: refVal5.properties.user.type,
                        parentSchema: refVal5.properties.user,
                        data: data2
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    }
                    var valid4 = errors === errs_4;
                  }
                  var data2 = data1.settings;
                  if (data2 === undefined) {
                    valid4 = false;
                    var err = {
                      keyword: 'required',
                      dataPath: (dataPath || '') + '.data',
                      schemaPath: 'exported_user_data_v5/required',
                      params: {
                        missingProperty: 'settings'
                      },
                      message: 'should have required property \'settings\'',
                      schema: refVal5.properties,
                      parentSchema: refVal5,
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
                      var data3 = data2.useDarkTheme;
                      if (data3 === undefined) {
                        valid5 = false;
                        var err = {
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.data.settings',
                          schemaPath: 'exported_user_data_v5/properties/settings/required',
                          params: {
                            missingProperty: 'useDarkTheme'
                          },
                          message: 'should have required property \'useDarkTheme\'',
                          schema: refVal5.properties.settings.properties,
                          parentSchema: refVal5.properties.settings,
                          data: data2
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      } else {
                        var errs_5 = errors;
                        if (typeof data3 !== "boolean") {
                          var err = {
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.data.settings.useDarkTheme',
                            schemaPath: 'exported_user_data_v5/properties/settings/properties/useDarkTheme/type',
                            params: {
                              type: 'boolean'
                            },
                            message: 'should be boolean',
                            schema: refVal5.properties.settings.properties.useDarkTheme.type,
                            parentSchema: refVal5.properties.settings.properties.useDarkTheme,
                            data: data3
                          };
                          if (vErrors === null) vErrors = [err];
                          else vErrors.push(err);
                          errors++;
                        }
                        var valid5 = errors === errs_5;
                      }
                      var data3 = data2.markVideoWatchedOnOpen;
                      if (data3 === undefined) {
                        valid5 = false;
                        var err = {
                          keyword: 'required',
                          dataPath: (dataPath || '') + '.data.settings',
                          schemaPath: 'exported_user_data_v5/properties/settings/required',
                          params: {
                            missingProperty: 'markVideoWatchedOnOpen'
                          },
                          message: 'should have required property \'markVideoWatchedOnOpen\'',
                          schema: refVal5.properties.settings.properties,
                          parentSchema: refVal5.properties.settings,
                          data: data2
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      } else {
                        var errs_5 = errors;
                        if (typeof data3 !== "boolean") {
                          var err = {
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.data.settings.markVideoWatchedOnOpen',
                            schemaPath: 'exported_user_data_v5/properties/settings/properties/markVideoWatchedOnOpen/type',
                            params: {
                              type: 'boolean'
                            },
                            message: 'should be boolean',
                            schema: refVal5.properties.settings.properties.markVideoWatchedOnOpen.type,
                            parentSchema: refVal5.properties.settings.properties.markVideoWatchedOnOpen,
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
                        dataPath: (dataPath || '') + '.data.settings',
                        schemaPath: 'exported_user_data_v5/properties/settings/type',
                        params: {
                          type: 'object'
                        },
                        message: 'should be object',
                        schema: refVal5.properties.settings.type,
                        parentSchema: refVal5.properties.settings,
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
                    schemaPath: 'exported_user_data_v5/type',
                    params: {
                      type: 'object'
                    },
                    message: 'should be object',
                    schema: refVal5.type,
                    parentSchema: refVal5,
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
            valid0 = valid0 || valid1;
          }
        }
      }
    }
    if (!valid0) {
      var err = {
        keyword: 'anyOf',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/anyOf',
        params: {},
        message: 'should match some schema in anyOf',
        schema: validate.schema.anyOf,
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
  "anyOf": [{
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
  }, {
    "properties": {
      "version": {
        "const": 3
      },
      "data": {
        "$ref": "exported_user_data_v3"
      }
    }
  }, {
    "properties": {
      "version": {
        "const": 4
      },
      "data": {
        "$ref": "exported_user_data_v4"
      }
    }
  }, {
    "properties": {
      "version": {
        "const": 5
      },
      "data": {
        "$ref": "exported_user_data_v5"
      }
    }
  }]
};
validate.errors = null;
module.exports = validate;