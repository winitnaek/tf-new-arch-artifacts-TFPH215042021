export const whatIfTest = [
      {
        "id" : "garnishmentDeduction/BenefitPlan",
        "placeholder": "Enter Garnishment Deductions/Benefit Plan",
        "fieldtype": "text",
        "label": "Garnishment Deduction/Benefit Plan",
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
        "id" : "amount",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "number",
        "label": "Amount",
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
        "id" : "garnishmentPlanCalculationIndicator",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "text",
        "label": "Garnishment Plan Calculation Indicator",
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
        "id" : "garnishmentDeduction/BenefitPlan",
        "placeholder": "Enter Garnishment Deductions/Benefit Plan",
        "fieldtype": "text",
        "label": "Garnishment Deduction/Benefit Plan",
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
        "id" : "amount",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "number",
        "label": "Amount",
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
        "id" : "garnishmentPlanCalculationIndicator",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "text",
        "label": "Garnishment Plan Calculation Indicator",
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
        "id" : "garnishmentDeduction/BenefitPlan",
        "placeholder": "Enter Garnishment Deductions/Benefit Plan",
        "fieldtype": "text",
        "label": "Garnishment Deduction/Benefit Plan",
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
        "id" : "amount",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "number",
        "label": "Amount",
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
        "id" : "garnishmentPlanCalculationIndicator",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "text",
        "label": "Garnishment Plan Calculation Indicator",
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
        "id" : "garnishmentDeduction/BenefitPlan",
        "placeholder": "Enter Garnishment Deductions/Benefit Plan",
        "fieldtype": "text",
        "label": "Garnishment Deduction/Benefit Plan",
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
        "id" : "amount",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "number",
        "label": "Amount",
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
        "id" : "garnishmentPlanCalculationIndicator",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "text",
        "label": "Garnishment Plan Calculation Indicator",
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
        "id" : "garnishmentDeduction/BenefitPlan",
        "placeholder": "Enter Garnishment Deductions/Benefit Plan",
        "fieldtype": "text",
        "label": "Garnishment Deduction/Benefit Plan",
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
        "id" : "amount",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "number",
        "label": "Amount",
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
        "id" : "garnishmentPlanCalculationIndicator",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "text",
        "label": "Garnishment Plan Calculation Indicator",
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
        "id" : "garnishmentDeduction/BenefitPlan",
        "placeholder": "Enter Garnishment Deductions/Benefit Plan",
        "fieldtype": "text",
        "label": "Garnishment Deduction/Benefit Plan",
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
        "id" : "amount",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "number",
        "label": "Amount",
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
        "id" : "garnishmentPlanCalculationIndicator",
        "placeholder": "Enter Garnishment Deductions/Benefit Plans",
        "fieldtype": "text",
        "label": "Garnishment Plan Calculation Indicator",
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