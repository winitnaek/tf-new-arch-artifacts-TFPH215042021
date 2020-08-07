export const customGarnishments = [
  {
    "id": "customGarnishmentCode",
    "placeholder": "Enter Custom Garnishment Information",
    "fieldtype": "text",
    "label": "Custom Garnishment Code",
    "value": "",
    "errmsg": " ",
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
    "id": "customGarnishmentName",
    "placeholder": "Custom Garnishment Name",
    "fieldtype": "text",
    "label": "Custom Garnishment Name",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 5,
      "maxlength": 25
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "string",
      "subtype": [
        {
          "type": "string",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 5,
          "message": "min 25 characters"
        },
        {
          "type": "max",
          "input": 25,
          "message": "max 25 characters"
        }
      ]
    }
  }
]
