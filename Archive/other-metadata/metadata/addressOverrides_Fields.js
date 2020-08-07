export const addressOverrides =  [
  
  {
    "id": "streetNumberType",
    "placeholder": "Enter Address Override Information",
    "fieldtype": "text",
    "label": "Street Number Type",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    },

    "fieldinfo": {
      
    },
    "validation": {
      "required": true,
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
          "input": 7,
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
    "id": "prefixDirection",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "text",
    "label": "Street Number Type",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 2
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
          "input": 1,
          "message": "min 5 characters"
        },
        {
          "type": "max",
          "input": 2,
          "message": "max 25 characters"
        }
      ]
    }
  },

  {
    "id": "streetName",
    "placeholder": "",
    "fieldtype": "text",
    "label": "Street Name",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 5,
      "maxlength": 75
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
          "input": 75,
          "message": "max 75 characters"
        }
      ]
    }
  }, 

  {
    "id": "streetType",
    "placeholder": "Enter Address Override Information",
    "fieldtype": "text",
    "label": "Street Type",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 5
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
          "input": 3,
          "message": "min 3 characters"
        },
        {
          "type": "max",
          "input": 5,
          "message": "max 5 characters"
        }
      ]
    }
  },
  {
    "id": "postDirection",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "text",
    "label": "Post Direction",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 2
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
          "input": 1,
          "message": "min 5 characters"
        },
        {
          "type": "max",
          "input": 2,
          "message": "max 25 characters"
        }
      ]
    }
  },

  {
    "id": "startingNumber",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "number",
    "label": "Starting Number",
    "value": "",
    "errmsg": "Please enter valid number",
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
          "input": 1,
          "message": "min 1 characters"
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
    "id": "alphanumericStartingNumber",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "text",
    "label": "Alphanumeric Starting Number",
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
          "type": "uppercase",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 1,
          "message": "min 1 characters"
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
    "id": "endingNumber",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "text",
    "label": "Ending Number",
    "value": "",
    "errmsg": "Please enter valid number",
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
          "input": 1,
          "message": "min 1 characters"
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
    "id": "alphanumericEndingNumber",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "text",
    "label": "Alphanumeric Ending Number",
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
          "type": "uppercase",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 1,
          "message": "min 1 characters"
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
    "id": "postalCode",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "text",
    "label": "Postal Code",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 5,
      "maxlength": 10
    },

    "fieldinfo": {
      
    },
    "validation": {
      "required": true,
      "type": "string",
      "subtype": [
        {
          type: "positive",
          message: "Zipcode cannot be negative"

        },
        {
          type: "typeError",
          message: "Must be a number"
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
          "input": 10,
          "message": "max 25 characters"
        }
      ]
    }
  }, 

  {
    "id": "parity",
    "placeholder":"Enter Address Override Information",
    "fieldtype": "text",
    "label": "Parity",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 3,
      "maxlength": 4
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
          "input": 3,
          "message": "min 3 characters"
        },
        {
          "type": "max",
          "input": 4,
          "message": "max 4 characters"
        }
      ]
    }
  },

  {
    "id": "secondaryUnit",
    "placeholder": "Enter Address Override Information",
    "fieldtype": "text",
    "label": "Secondary Unit",
    "value": "",
    "errmsg": "",
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
      "id": "showMessage",
      "placeholder": "",
      "fieldtype": "Check Box",
      "label": "Show Message",
      "value": "",
      "errmsg": "",
      "fieldlength": {
        "minlength": 1,
        "maxlength": 1
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
            "input": 1,
            "message": "min 5 characters"
          },
          {
            "type": "max",
            "input": 1,
            "message": "max 25 characters"
          }
        ]
      }
  },

  {
    "id": "stateAbbreviation",
    "placeholder": "text",
    "fieldtype": "text",
    "label": "State Abbreviation",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 2,
      "maxlength": 2
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": true,
      "type": "string",
      "subtype": [
        {
          "type": "",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 2,
          "message": "min 2 characters"
        },
        {
          "type": "max",
          "input": 2,
          "message": "max 2 characters"
        }
      ]
    }
  },

  {
    "id": "county",
    "placeholder": "",
    "fieldtype": "text",
    "label": "County",
    "value": "",
    "errmsg": "",
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
  "id": "placeCode",
  "placeholder": "",
  "fieldtype": "text",
  "label": "Place Code",
  "value": "",
  "errmsg": "",
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
    "id": "schoolDistrict",
    "placeholder": "Enter Address Override Information",
    "fieldtype": "text",
    "label": "School District",
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
          "type": "",
          "message": ""
        }
      ],
      "constraint": [
        {
          "type": "min",
          "input": 0,
          "message": ""
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

