export const customFormulas = [
  {
    "id": "customTaxCode",
    "placeholder": "Enter Custom Tax Formulas",
    "fieldtype": "text",
    "label": "Custom Tax Code",
    "value": "",
    "errmsg": "Custom Tax Code is required",
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
    "id": "startDate",
    "placeholder": "Start Date",
    "fieldtype": "text",
    "label": "Start Date",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 8,
      "maxlength": 8
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": true,
      "type": "Date",
      "subtype": [
        {
          "type": "Date",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 8,
          "message": "min 8 characters"
        },
        {
          "type": "max",
          "input": 8,
          "message": "max 8 characters"
        }
      ]
    }
  },
  {
    "id": "endDate",
    "placeholder": "End Date",
    "fieldtype": "Date",
    "label": "End Date",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 8,
      "maxlength": 8
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": true,
      "type": "Date",
      "subtype": [
        {
          "type": "Date",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 8,
          "message": "min 8 characters"
        },
        {
          "type": "max",
          "input": 8,
          "message": "max 8 characters"
        }
      ]
    }
  },
  {
    "id": "calculationMethod",
    "placeholder": " ",
    "fieldtype": "text",
    "label": "Custom Tax Code",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    }
	
	,
    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "string",
      "subtype": [
        {
          "type": "uppercase",
          "message": "."
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
    "id": "taxRate",
    "placeholder": "Tax Rate",
    "fieldtype": "number",
    "label": "Tax Rate",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "number",
      "subtype": [
        {
          "type": "lowercase",
          "message": ""
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
    "id": "roundingMethod",
    "placeholder": "Rounding Method",
    "fieldtype": "number",
    "label": "Rounding Method",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "number",
      "subtype": [
        {
          "type": "number",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 1,
          "message": "min 1 character"
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
    "id": "minimumWage",
    "placeholder": "Minimum Wage",
    "fieldtype": "number",
    "label": "Minimum Wage",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "number",
      "subtype": [
        {
          "type": "lowercase",
          "message": ""
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
    "id": "maximumWage",
    "placeholder": "Maximum Wage",
    "fieldtype": "number",
    "label": "Maximum Wage",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "Date",
      "subtype": [
        {
          "type": "number",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 1,
          "message": "min 1 character"
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
        "id": "maximumTax",
        "placeholder": "Maximum Tax",
        "fieldtype": "number",
        "label": "maximum Tax",
        "value": "",
        "errmsg": "",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 25
        },
        "fieldinfo": {
          
        },
        "validation": {
          "required": false,
          "type": "string",
          "subtype": [
            {
              "type": "lowercase",
              "message": ""
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
        "id": "flatAmount",
        "placeholder": "Flat Amount",
        "fieldtype": "number",
        "label": "Flat Amount",
        "value": "",
        "errmsg": "",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 25
        },
        "fieldinfo": {
          
        },
        "validation": {
          "required": false,
          "type": "number",
          "subtype": [
            {
              "type": "number",
              "message": ""
            }
          ],
          "constraint": [
            {
              "type": "min",
              "input": 1,
              "message": "min 1 character"
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