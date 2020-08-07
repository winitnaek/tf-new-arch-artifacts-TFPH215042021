export const formulaEffectiveDateOverrides = [
    
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
        "placeholder": "Enter Tax Effective Date Override",
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
        "id": "formulaEffectivetDate",
        "placeholder": "Enter Tax Effective Date Override",
        "fieldtype": "text",
        "label": "Formula Effective Date",
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
        "id": "startDate",
        "placeholder": "Enter Tax Effective Date Override",
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
        "placeholder": "Enter Tax Effective Date Override",
        "fieldtype": "text",
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
      }
 
]