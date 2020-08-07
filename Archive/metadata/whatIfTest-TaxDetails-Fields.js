export const whatIfTest = [
 
      {
        "id" : "authority",
        "placeholder": "Add New Tax",
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
        "placeholder": "Add New Tax",
        "fieldtype": "text",
        "label": "Tax Type / User Tax Type",
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
        "placeholder": "Add New Tax",
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
        "id": "residentCode",
        "placeholder": "Add New Tax",
        "fieldtype": "text",
        "label": "Resident Code",
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
        "id": "roundingIndicator",
        "placeholder": "Add New Tax",
        "fieldtype": "text",
        "label": "Rounding Indicator",
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
        "id": "withholdingTaxForm",
        "placeholder": "Add New Tax",
        "fieldtype": "text",
        "label": "Withholding Form",
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
        "id" : "payPeriodWage",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Pay Period Wage",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      }, 
      {
        "id" : "yearToDateWage",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Paid ByYear To Date Wage",
        "value": "",
        "errmsg": "Please enter a vlid number ",
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
        "id" : "yearToDateTax",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Year To Date Tax",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
          
        }
      }, 

      {
        "id" : "yearToDateTaxPWS",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Year To Date PWS",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },

      {
        "id" : "yearToDateTaxOPTPWS",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Year To Date OPT PWS",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },

      {
        "id" : "riskClassificationCode",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Rosk Classification Code",
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
        "id" : "experienceRate",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Experience Rate",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      }, 
  
      {
        "id" : "maximumWageOverride",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Maximum Wage Override",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      }, 

      {
        "id" : "hoursWorked",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Houes Worked",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      }, 
      {
        "id" : "additionalExemptionAmount",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Additional Exemption Amount",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      }, 

      {
        "id" : "taxCreditAmount",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Tax Credit Amount",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },

      {
        "id" : "actualYearToDateWages",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "ActualYearToDateWages",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },

      {
        "id" : "yearToDateSubjectWages",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Year To Date Subject Wages",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      }, 
      {
        "id" : "yearToDateExemptWages",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Year To Date Exempt Wages",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "taxExempt",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Tax Exempt",
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
        "id" : "selfAdjust",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Self Adjust",
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
        "id" : "maritalStatus",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Marital Status",
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
        "id" : "eICStatus",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "EIC Status",
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
        "id" : "exemptions",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Exemptions",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },    
      {
        "id" : "personalExemptions",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Personal Exemptions",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "dependentExemptions",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Dependent Exemptions",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "exemption Amount",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Exemption Amount",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "numberOfAdditionalExemptions",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Number Of Additional Exemptions",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },

      {
        "id" : "calculatedTax",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "calculated Tax",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "electedStateIndicator",
        "placeholder": "Taxes",
        "fieldtype": "text",
        "label": "Elected State Indicator",
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
        "id" : "taxEffectiveDate",
        "placeholder": "Taxes",
        "fieldtype": "Date",
        "label": "Tax Effective Date",
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
        "id" : "estimatedQuarterlyGrossWages",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Estimated Quarterly Gross Wages",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "additionalNonwageIncome",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Additional Nonwage Income",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "employersAnnualGrossPayroll",
        "placeholder": "Taxes",
        "fieldtype": "number",
        "label": "Employers Annual Gross Payroll",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "payPeriodToDate",
        "placeholder": "Nonresident Days worked",
        "fieldtype": "number",
        "label": "Pay Period To Date",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "monthToDate",
        "placeholder": "Nonresident Days worked",
        "fieldtype": "number",
        "label": "Month To Date",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "quarterToDate",
        "placeholder": "Nonresident Days worked",
        "fieldtype": "number",
        "label": "Quarter To Date",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "yearToDate",
        "placeholder": "Nonresident Days worked",
        "fieldtype": "number",
        "label": "Year To Date",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "participateInReciprocalCalculation",
        "placeholder": "Reciprocal",
        "fieldtype": "Check Box",
        "label": "Participate In Reciprocal Calculation",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 1
        },
    
        "fieldinfo": {
          
        },
        "validation": {
          "required": false,
          "type": "Check Box",
          "subtype": [
            {
              "type": "Check Box",
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
              "input":  1,
              "message": "max 1 characters"
            }
          ]
        }
      },

      {
        "id" : "certificateCode",
        "placeholder": "Reciprocal",
        "fieldtype": "text",
        "label": "Certificate Code",
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
              "message": "max  25 characters"
            }
          ]
        }
      }, 
      {
        "id" : "useReciprocalCalculation",
        "placeholder": "Reciprocal",
        "fieldtype": "Check Box",
        "label": "Use Reciprocal Calculation",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 1
        },
    
        "fieldinfo": {
          
        },
        "validation": {
          "required": false,
          "type": "Check Box",
          "subtype": [
            {
              "type": "Check Box",
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
              "input":  1,
              "message": "max 1 characters"
            }
          ]
        }
      },
      {
        "id" : "percentageWorked",
        "placeholder": "Reciprocal",
        "fieldtype": "number",
        "label": "Percentage Worked",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
      {
        "id" : "Reciprocal Tax Credit Amount",
        "placeholder": "Reciprocal",
        "fieldtype": "number",
        "label": "Reciprocal Tax Credit Amount",
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
              "input": 5,
              "message": "max  25 characters"
            }
          ]
        }
      },
     {
        "id" : "nexusIndicator",
        "placeholder": "Reciprocal",
        "fieldtype": "text",
        "label": "Nexus Indicator",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 5,
          "maxlength": 5
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
        "id" : "Additional Tax",
        "placeholder": "Voluntary",
        "fieldtype": "string",
        "label": "Additional Tax",
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
        "id" : "Additional Amount",
        "placeholder": "Voluntary",
        "fieldtype": "number",
        "label": "Additional Amount",
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
        "id" : "additionalTaxRate",
        "placeholder": "Voluntary",
        "fieldtype": "number",
        "label": "Additional Tax Rate",
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
        "id" : "supplementalCode",
        "placeholder": "Supplemental",
        "fieldtype": "text",
        "label": "Supplemental Code",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 5,
          "maxlength": 5
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
        "id" : "baseWages",
        "placeholder": "Supplemental",
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
        "id" : "yearToDateSupplemental",
        "placeholder": "Supplemental",
        "fieldtype": "number",
        "label": "Year To Date Supplemental",
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
        "id" : "priorCommissions",
        "placeholder": "Supplemental",
        "fieldtype": "number",
        "label": "Prior Commissions",
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
        "id" : "payPeriodToDateTax",
        "placeholder": "Pay Period",
        "fieldtype": "number",
        "label": "Pay Period To Date Tax",
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
        "id" : "payPeriodToDateWages",
        "placeholder": "Pay Period",
        "fieldtype": "number",
        "label": "Pay Period To Date Wages",
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
        "id" : "monthToDateWages",
        "placeholder": "Pay Period",
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
        "id" : "monthToDateTax",
        "placeholder": "Pay Period",
        "fieldtype": "number",
        "label": "Month To Date Tax",
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
        "id" : "quarterToDateWages",
        "placeholder": "Pay Period",
        "fieldtype": "number",
        "label": "Quarter To Date Wages",
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
        "id" : "quarterToDateTax",
        "placeholder": "Pay Period",
        "fieldtype": "number",
        "label": "Quarter To Date Tax",
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
      }
 
]