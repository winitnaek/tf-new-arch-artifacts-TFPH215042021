export const pensionWhatIfTest = [
    {
        "id": "recipientName",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Recipient Name",
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
        "id": "recipientCode",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Recipient Code",
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
        "id": "checkDate",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "Date",
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
        "id": "group",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Group",
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
        "id": "company",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Company",
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
        "id": "paymentType",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Payment Type",
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
              "type": "text",
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
        "id": "payFrequency",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "number",
        "label": "Pay Frequency",
        "value": "",
        "errmsg": " ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 3
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
              "input": 3,
              "message": "max 3 characters"
            }
          ]
        }
      },

      {
        "id": "yTDPayPeriod",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "number",
        "label": "YTD Pay Period",
        "value": "",
        "errmsg": "Please enter valid number ",
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
        "id": "est.AnnualGrossAmount",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "number",
        "label": "Est. Annual Gross Amount",
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
        "id": "grossUpIndicator",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Gross up Indicator",
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
        "id": "rolloverEligible",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Rollover Eligible",
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
        "id": "disbursementRolloverMonths",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "number",
        "label": "Disbursement Rollover Months",
        "value": "",
        "errmsg": "Please enter valid number. ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 4
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
              "input": 4,
              "message": "max 4 characters"
            }
          ]
        }
      },

      {
        "id": "companyPlan",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "text",
        "label": "Company Plan ",
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
        "id": "netWages",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "number",
        "label": "Net wages",
        "value": "",
        "errmsg": "Please enter valid number ",
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
              type: "positive",
              message: " "
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
        "id": "disbursementDate",
        "placeholder": "Manage Pension Recipient Information for ",
        "fieldtype": "Date",
        "label": "Disbursement Date",
        "value": "",
        "errmsg": "",
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
        "id" : "authority",
        "placeholder": "Add New Tax for:",
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
        "id" : "taxType",
        "placeholder": "Add New Tax for:",
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
        "id" : "residency",
        "placeholder": "Add New Tax",
        "fieldtype": "text",
        "label": "Residency",
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
        "id": "taxExempt",
        "placeholder": "Add New Tax",
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
        "id": "selfAdjust",
        "placeholder": "Add New Tax",
        "fieldtype": "text",
        "label": "Self Adjsut",
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
        "placeholder": "Add New Tax for:",
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
        "id": "withholdingForm",
        "placeholder": "Add New Tax for:",
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
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Pay Period Wage",
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
        "id" : "yearToDateWage",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Paid ByYear To Date Wage",
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
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Year To Date Tax",
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
          "type": "number",
          "subtype": [
            {
              "type": "number",
              "message": "1"
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
              "input": 25,
              "message": "max 25 characters"
            }
          ]
        }
      }, 
      {
        "id" : "actualYearToDateWages",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Actual Year To Date Wages",
        "value": "",
        "errmsg": "Please enter valid number",
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
        "id" : "maritalStatus",
        "placeholder": "Add new tax for :",
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
            },
          

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
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Exemptions",
        "value": "",
        "errmsg": "Please enter valid number ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 5
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
        "id" : "personalExemptions",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Personal Exemptions",
        "value": "",
        "errmsg": "Please enter valid number ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 5
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
        "id" : "dependentExemptions",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Dependent Exemptions",
        "value": "",
        "errmsg": "Please enter valid number ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 5
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
        "id" : "exemption Amount",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Exemption Amount",
        "value": "",
        "errmsg": "Please enter valid number ",
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
              "type": "unumber",
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
        "id" : "numberOfAdditionalExemptions",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Number Of Additional Exemptions",
        "value": "",
        "errmsg": "Please enter valid number .",
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
        "id" : "additionalExemptionAmount",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Additional Exemption Amount",
        "value": "",
        "errmsg": "Please enter valid number. ",
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
        "id" : "taxCreditAmount",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Tax Credit Amount",
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
        "id" : "taxEffectiveDate",
        "placeholder": "Add new tax for :",
        "fieldtype": "Date",
        "label": "Tax Effective Date",
        "value": "",
        "errmsg": "Please enter valid number ",
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
              "type": "date",
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
              "message": "max 25 characters"
            }
          ]
        }
      },
      {
        "id" : "additionalNonwageIncome",
        "placeholder": "Add new tax for :",
        "fieldtype": "number",
        "label": "Additional Nonwage Income",
        "value": "",
        "errmsg": "Please enter valid number ",
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
        "id" : "Additional Tax",
        "placeholder": "Voluntary",
        "fieldtype": "number",
        "label": "Additional Tax",
        "value": "",
        "errmsg": "Please enter valid number ",
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
              "type": "false",
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
        "id" : "Additional Amount",
        "placeholder": "Voluntary",
        "fieldtype": "number",
        "label": "Additional Amount",
        "value": "",
        "errmsg": "Please enter valid number ",
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
        "errmsg": "Please enter valid number ",
        "fieldlength": {
          "minlength": 1,
          "maxlength": 5
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
        "errmsg": "Please enter valid number ",
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
        "label": "Base Wages",
        "value": "",
        "errmsg": "Please enter valid number ",
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
        "id" : "payPeriodTax",
        "placeholder": "Pay Period",
        "fieldtype": "number",
        "label": "Pay Period Tax",
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
        "id" : "payPeriodToDateWages",
        "placeholder": "Pay Period",
        "fieldtype": "number",
        "label": "Pay Period To Date Wages",
        "value": "",
        "errmsg": "Please enter valid number ",
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
        "errmsg": "Please enter valid number ",
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
        "errmsg": "Please enter valid number ",
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
        "errmsg": "Please enter valid number ",
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

]