export const companies =  [
  
  {
    "id": "companyCode",
    "placeholder": "Enter Company Information",
    "fieldtype": "text",
    "label": "Company Code",
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
          "type": "uppercase",
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
          "input": 12,
          "message": "max 25 characters"
        }
      ]
    }
  },
  {
    "id": "fEIN",
    "placeholder":"",
    "fieldtype": "text",
    "label": "FEIN",
    "value": "",
    "errmsg": "Please enter a valid number",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 2
    },

    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "numbers",
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
          "input": 9,
          "message": "min 9 characters"
        },
        {
          "type": "max",
          "input": 9,
          "message": "max 9 characters"
        }
      ]
    }
  },

  {
    "id": "companyName",
    "placeholder": "",
    "fieldtype": "text",
    "label": " Name",
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
  }

]

