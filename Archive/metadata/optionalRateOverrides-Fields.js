export const optionalRateOverrides = [
    {
        "id": "startDate",
        "placeholder": "Enter Override Information",
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
        "id": "authority",
        "placeholder": "Enter Override Information",
        "fieldtype": "text",
        "label": "Authority",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 5,
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
        "id": "taxType",
        "placeholder": "Enter Override Information",
        "fieldtype": "text",
        "label": "Tax Type",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 5,
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
        "id": "formula",
        "placeholder": "Enter Override Information",
        "fieldtype": "text",
        "label": "Formula",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 5,
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
        "id": "endDate",
        "placeholder": "End Date",
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
    "id": "riskClassificationCode",
    "placeholder": "Enter Override Information",
    "fieldtype": "text",
    "label": "Risk Classification Code",
    "value": "",
    "errmsg": " ",
    "fieldlength": {
      "minlength": 5,
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
    "id": "account#",
    "placeholder": "Enter Override Information ",
    "fieldtype": "text",
    "label": "Account #",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 5,
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
    "id": "optionalRate",
    "placeholder": "Enter Override Information",
    "fieldtype": "text",
    "label": "Optional Rate",
    "value": "",
    "errmsg": " ",
    "fieldlength": {
      "minlength": 5,
      "maxlength": 25
    },

    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "number",
      "subtype": [
        {
          "type": "uppercase",
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
    "id": "overridemaximumWage",
    "placeholder": "Enter Override Information",
    "fieldtype": "number",
    "label": "Override Maximum Wage",
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
    "id": "bSIWage(BSI Maintained Formula)",
    "placeholder": "Payment Type- REGULAR",
    "fieldtype": "number",
    "label": "BSIWage (BSI Maintained Formula)",
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
]