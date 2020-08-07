export const disposableOverrides = [
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
  },
 
  {
    "id": "garnishment",
    "placeholder": "Enter Override Information ",
    "fieldtype": "text",
    "label": "Garnishment",
    "value": "",
    "errmsg": "Tax Type is required",
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
          "type": "lowercase",
          "message": "Tax Type needs to be in uppercase."
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
    "id": "paymentCode",
    "placeholder": "Enter Override Information ",
    "fieldtype": "text",
    "label": "Payment Code",
    "value": "",
    "errmsg": "Payment Code may not be blank.",
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
          "type": "lowercase",
          "message": "Tax Type needs to be in uppercase."
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
    "id": "processCode",
    "placeholder": "Enter Override Information ",
    "fieldtype": "text",
    "label": "Process Code",
    "value": "",
    "errmsg": "Tax Type is required",
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
    "id": "minimumAmount",
    "placeholder": "Enter Override Information ",
    "fieldtype": "number",
    "label": "Minimum Amount",
    "value": "",
    "errmsg": "Please enter a valid number",
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
        },
        {
          type: "typeError",
          message: "Must be a number"
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
    "id": "maximumAmount",
    "placeholder": "Enter Override Information ",
    "fieldtype": "number",
    "label": "Maximum Amount",
    "value": "",
    "errmsg": "Please enter a valid number",
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
        },
        {
          type: "typeError",
          message: "Must be a number"
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
    "id": "minimumPercent",
    "placeholder": "Enter Override Information ",
    "fieldtype": "number",
    "label": "Minimum Percent",
    "value": "",
    "errmsg": "Please enter a valid number",
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
        },
        {
          type: "typeError",
          message: "Must be a number"
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
    "id": "maximumPercent",
    "placeholder": "Enter Override Information ",
    "fieldtype": "number",
    "label": "Maximum Percent",
    "value": "",
    "errmsg": "Please enter a valid number",
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
        },
        {
          type: "typeError",
          message: "Must be a number"
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
    