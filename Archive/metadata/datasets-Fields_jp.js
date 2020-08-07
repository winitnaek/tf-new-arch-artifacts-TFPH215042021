export const datasets = [
  {
    "id": "datasetID",
    "placeholder": "Datasets",
    "fieldtype": "text",
    "label": "Dataset",
    "value": "",
    "errmsg": "Dataset ID is required",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    }
	
	,
    "fieldinfo": {
      
    },
    "validation": {
      "required": true,
      "type": "string",
      "subtype": [
        {
          "type": "uppercase",
          "message": "Dataset ID needs to be in uppercase."
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 5,
          "message": "min 5 characters"
        },
        {
          "type": "max",
          "input": 25,
          "message": "max 25 characters"
        }
      ]
    }
  },
  {
    "id": "description",
    "placeholder": "Datasets",
    "fieldtype": "text",
    "label": "Description",
    "value": "",
    "errmsg": "Description is required",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": true,
      "type": "string",
      "subtype": [
        {
          "type": "lowercase",
          "message": " "
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 5,
          "message": "min 5 characters"
        },
        {
          "type": "max",
          "input": 25,
          "message": "max 25 characters"
        }
      ]
    }
  }
];