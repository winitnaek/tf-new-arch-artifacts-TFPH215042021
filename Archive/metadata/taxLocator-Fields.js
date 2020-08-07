export const taxLocator = [
    {
        "id": "checkDate",
        "placeholder": "Add New Locator Employee",
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
        "id": "employeeCode",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Employee Code",
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
        "id": "employeeName",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Employee Name",
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
        "id": "employeeClass",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Employee Class",
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
        "id": "eICCode",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "EIC Code",
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
        "id": "taxFilter",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Tax Filter",
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
        "id": "privateSectorRetirementPlanIndicator",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Private Sector Retirement Plan Indicator",
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
        "id": "hireDate",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Hire Date",
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
        "id": "dataVersion",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Data Version",
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
        "id": "selectedState",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Selected State",
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
        "id": "selectedStateIndicator",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Selected State Indicator",
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
        "id": "fEDWthForEeLive/WorkInSameTerritory",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "FED WTH for EE live/work in same Territory",
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
        "id" : "companyCode",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Company Code",
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
        "id" : "paidBy",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Paid By",
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
        "id" : "railRoadCode",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Rail Road Code",
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
        "id" : "grossAmount",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Gross Amount",
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
        "id" : "returnAllStates",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Return All States",
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
        "id" : "residentCountry",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Resident Country",
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
        "id" : "employmentType",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Employment Type",
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
        "id": "dateOfDeath",
        "placeholder": "Add New Locator Employee",
        "fieldtype": "text",
        "label": "Date of Death",
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