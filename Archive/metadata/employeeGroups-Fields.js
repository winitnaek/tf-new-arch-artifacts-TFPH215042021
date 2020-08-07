export const employeeGroups = [
    {
        "id": "groupCode",
        "placeholder": "Enter Employee Group Information",
        "fieldtype": "text",
        "label": "Group Code",
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
    "id": "groupName",
    "placeholder": "Enter Group Name",
    "fieldtype": "text",
    "label": "Group Name",
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
  }
]