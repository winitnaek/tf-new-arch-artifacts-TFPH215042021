export const customNexusData = [
  {
    "id": "authorityName",
    "placeholder": "Enter Nexus Relationship",
    "fieldtype": "text",
    "label": "Authority Name",
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
    "id": "dCCourtesy",
    "placeholder": " ",
    "fieldtype": "text",
    "label": "DC Courtesy ",
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
  }                       
  
];