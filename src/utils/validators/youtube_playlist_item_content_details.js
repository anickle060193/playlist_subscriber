'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=youtube_playlist_item_content_details */
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      var data1 = data.videoId;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'videoId'
          },
          message: 'should have required property \'videoId\'',
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
            dataPath: (dataPath || '') + '.videoId',
            schemaPath: '#/properties/videoId/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.videoId.type,
            parentSchema: validate.schema.properties.videoId,
            data: data1
          };
          if (vErrors === null) vErrors = [err];
          else vErrors.push(err);
          errors++;
        }
        var valid1 = errors === errs_1;
      }
      var data1 = data.videoPublishedAt;
      if (data1 === undefined) {
        valid1 = false;
        var err = {
          keyword: 'required',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/required',
          params: {
            missingProperty: 'videoPublishedAt'
          },
          message: 'should have required property \'videoPublishedAt\'',
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
            dataPath: (dataPath || '') + '.videoPublishedAt',
            schemaPath: '#/properties/videoPublishedAt/type',
            params: {
              type: 'string'
            },
            message: 'should be string',
            schema: validate.schema.properties.videoPublishedAt.type,
            parentSchema: validate.schema.properties.videoPublishedAt,
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
  "$id": "youtube_playlist_item_content_details",
  "type": "object",
  "required": ["videoId", "videoPublishedAt"],
  "properties": {
    "videoId": {
      "type": "string"
    },
    "videoPublishedAt": {
      "type": "string"
    }
  }
};
validate.errors = null;
module.exports = validate;