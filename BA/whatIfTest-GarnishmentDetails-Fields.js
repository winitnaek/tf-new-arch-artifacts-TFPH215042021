export const whatIfTest = [
         {
        "id" : "authority",
        "placeholder": "Manage Garnishments for : ",
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
        "id" : "taxType/UserTaxType",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "TaxType / User Tax Type",
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
        "id" : "formula",
        "placeholder": "Manage Garnishments for : ",
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
        "id" : "caseID",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Case ID",
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
        "id" : "docketNumber",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Docket Number",
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
        "id" : "filingStatus",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Filing Status",
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
        "id" : "numberOfExemptions",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Number Of Exemptions",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "additionalStandardDeduction",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Additional Standard Deduction",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "secondFamily",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Second Family",
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
        "id" : "headOfFamily",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Head of Family",
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
        "id" : "numberOfDependents",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Number Of Dependents",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "numberOfDependentChildren",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Number Of Dependent Children",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "garnishmentDuration",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Garnishment Duration",
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
        "id" : "calculatedAmount",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Calculated Amount",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "paymentNumber",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Payment Number",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "statementOfExemptions",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Statement of Exemptions",
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
        "id" : "Override System Priority",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "overrideSystemPriority",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "isDelinquent",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Is Delinquent",
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
        "id" : "garnishmentReceivedDate",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "Date",
        "label": "Garnishment Received Date",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 8,
          "maxlength": 8
        },
    
        "fieldinfo": {
          
        },
        "validation": {
          "required": false,
          "type": "date",
          "subtype": [
            {
              "type": "false",
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
        "id" : "garnishmentStartDate",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "Date",
        "label": "Garnishment Start Date",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 8,
          "maxlength": 8
        },
    
        "fieldinfo": {
          
        },
        "validation": {
          "required": false,
          "type": "date",
          "subtype": [
            {
              "type": "false",
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
        "id" : "garnishmentEndDate",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "Date",
        "label": "Garnishment End Date",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 8,
          "maxlength": 8
        },
    
        "fieldinfo": {
          
        },
        "validation": {
          "required": false,
          "type": "date",
          "subtype": [
            {
              "type": "false",
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
        "id" : "typeOfDebt",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Type Of Debt",
        "value": "",
        "errmsg": " ",
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
        "id" : "vocation",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Vocation",
        "value": "",
        "errmsg": " ",
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
        "id" : "consent",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Consent",
        "value": "",
        "errmsg": " ",
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
        "id" : "orderedAmountFlag",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Ordered Amount Flag",
        "value": "",
        "errmsg": " ",
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
        "id" : "roundingIndicator",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Rounding Indicator",
        "value": "",
        "errmsg": " ",
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
        "id" : "limitforChildSupport",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Limit for Child Support",
        "value": "",
        "errmsg": " ",
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
        "id" : "priorAmount",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Prior Amount",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "percentToWithhold",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Percent to Withhold",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "orderedDollarAmount",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Ordered Dollar Amount",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "orderedPercentage",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Ordered Percentage",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "garnishmentExemption",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Garnishment Exemption",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "monthToDate Wages",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Month To Date Wages",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "annualWages",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "annualWages",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "disposableEarnings",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Disposable Earnings",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "garnishmentGross",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Garnishment Gross",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "reducingDeductions",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Reducing Deductions",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "localHourlyMinimumWage",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "remainderOfDisposableEarnings",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Remainder of Disposable Earnings",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "doesThisGarnishmentUseATimeReferenceCalculation?",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Does this garnishment use a time reference calculation?",
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
        "id" : "numberOfPeriodsForPayment",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Number of Periods for Payment",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "mTDGarnishment",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "MTD Garnishment",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "mTDDisposableEarnings",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "MTD Disposable Earnings",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "yTDGarnishment",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "YTD Garnishment",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "yTDDisposableEarnings",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "YTD Disposable Earnings",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "QTDGarnishment",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "QTD Garnishment",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "pPTDGarnishment",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "PPTD Garnishment",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "garnishmentCap",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Garnishment Cap",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "garnishmentLimitInd",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Garnishment Limit Ind",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "useAlternateLimit",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Use Alternate Limit",
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
        "id" : "garnishmentType",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Garnishment Type",
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
        "id" : "useStateOfIssue",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "Use State of Issue",
        "value": "",
        "errmsg": " ",
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
        "id" : "localProtectedHours",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "number",
        "label": "Local Protected Hours",
        "value": "",
        "errmsg": "Please enter a valid number ",
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
        "id" : "firstPayCode ",
        "placeholder": "Manage Garnishments for : ",
        "fieldtype": "text",
        "label": "First Pay Code",
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
      }
 
]