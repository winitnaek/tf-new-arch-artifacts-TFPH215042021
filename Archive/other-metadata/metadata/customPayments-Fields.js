export const customPayments = [
  {
    "id": "code",
    "placeholder": "Enter Custom Payments",
    "fieldtype": "text",
    "label": "Code",
    "value": "",
    "errmsg": "Code may not be blank",
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
    "id": "type",
    "placeholder": "Type",
    "fieldtype": "text",
    "label": "Type",
    "value": "",
    "errmsg": "Name may not be blank",
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
      "id": "name",
      "placeholder": "Name",
      "fieldtype": "text",
      "label": "Custom Tax Name",
      "value": "",
      "errmsg": "Name may not be blank",
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
  }
]

