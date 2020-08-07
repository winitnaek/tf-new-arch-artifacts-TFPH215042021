export const customTaxCodes = [
  {
    "id": "taxCode",
    "placeholder": "Enter Custom Tax Code",
    "fieldtype": "text",
    "label": "Custom Tax Code",
    "value": "",
    "errmsg": "Custom Tax Code is required",
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
          "message": "Tax Code needs to be in uppercase."
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
    "id": "name",
    "placeholder": "Enter Custom Tax Name",
    "fieldtype": "text",
    "label": "Custom Tax Name",
    "value": "",
    "errmsg": "Custom Tax Name is required",
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
          "message": "Tax Code needs to be in uppercase."
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