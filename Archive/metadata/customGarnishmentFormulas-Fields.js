export const customGarnishmentFormulas = [
  {
    "id": "customGarnishment",
    "placeholder": "Enter Garnishment Formulas",
    "fieldtype": "text",
    "label": "Custom Garnishment",
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
    "id": "startDate",
    "placeholder": "Start Date",
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
    "id": "method",
    "placeholder": "Input Section ",
    "fieldtype": "text",
    "label": "Method",
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
  },
  {
    "id": "flatAmount",
    "placeholder": "Amount",
    "fieldtype": "number",
    "label": "Flat Amoun",
    "value": "",
    "errmsg": "Please enter a valid number",
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
          "type": "lowercase",
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
    "id": "percent",
    "placeholder": "Percent",
    "fieldtype": "number",
    "label": "Percent",
    "value": "",
    "errmsg": "Please enter a valid number",
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
          "message": "min 1 character"
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
    "id": "priority",
    "placeholder": "Priority",
    "fieldtype": "number",
    "label": "Priority",
    "value": "Please enter a valid number",
    "errmsg": "",
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
          "type": "lowercase",
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
    "id": "method",
    "placeholder": "Exemption Section",
    "fieldtype": "string",
    "label": "Method",
    "value": "",
    "errmsg": "",
    "fieldlength": {
      "minlength": 1,
      "maxlength": 25
    },
    "fieldinfo": {
      
    },
    "validation": {
      "required": false,
      "type": "Date",
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
          "message": "min 1 character"
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
        "id": "exemptionFlatAmount",
        "placeholder": "Exemption Section",
        "fieldtype": "number",
        "label": "Exemption Flat Amount",
        "value": "",
        "errmsg": "",
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
              "type": "lowercase",
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
        "id": "exemptionAmount",
        "placeholder": "Exemption Section",
        "fieldtype": "number",
        "label": "Exemption Amount",
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
              "message": "min 1 character"
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
            "id": "exemptionDependentAmount",
            "placeholder": "Exemption Section",
            "fieldtype": "number",
            "label": "Exemption Dependent Amount",
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
              "type": "string",
              "subtype": [
                {
                  "type": "lowercase",
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
            "id": "statementOfExemptions",
            "placeholder": "Statement Of Exemptions",
            "fieldtype": "text",
            "label": "Statement Of Exemptions",
            "value": "",
            "errmsg": "",
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
                  "message": "min 5 character"
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
                "id": "method",
                "placeholder": "Method",
                "fieldtype": "string",
                "label": "Method",
                "value": "",
                "errmsg": "",
                "fieldlength": {
                  "minlength": 1,
                  "maxlength": 25
                },
                "fieldinfo": {
                  
                },
                "validation": {
                  "required": false,
                  "type": "Date",
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
                      "message": "min 1 character"
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
         "id": "calculationPercent",
         "placeholder": "Calculation Section",
         "fieldtype": "number",
         "label": "Calculation Percent",
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
           "type": "string",
           "subtype": [
                        {
                          "type": "lowercase",
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
                    "id": "calculationAmount",
                    "placeholder": "Calculation Section",
                    "fieldtype": "number",
                    "label": "Calculation Amount",
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
                          "message": "min 1 character"
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
     "id": "calculationLimit",
     "placeholder": "Calculation Section",
     "fieldtype": "number",
     "label": "Calculation Amount",
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
                "type": "string",
                 "subtype": [
                 {
                     "type": "lowercase",
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
      "id": "method",
       "placeholder": "Deduction Section",
       "fieldtype": "string",
       "label": "Method",
       "value": "",
       "errmsg": "",
       "fieldlength": {
          "minlength": 1,
          "maxlength": 25
                     },
             "fieldinfo": {
                              
                         },
                            "validation": {
                              "required": false,
                              "type": "Date",
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
                                  "message": "min 1 character"
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
                                "id": "deductionFlatAmount",
                                "placeholder": "Deduction Section",
                                "fieldtype": "number",
                                "label": "deduction Flat Amount",
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
                                  "type": "string",
                                  "subtype": [
                                    {
                                      "type": "lowercase",
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
                                "id": "deductionAmount",
                                "placeholder": "Deduction Section",
                                "fieldtype": "number",
                                "label": "Deduction Amount",
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
                                      "message": "min 1 character"
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
                                  "id": "deductionDependentAmount",
                                    "placeholder": "Deduction Section",
                                    "fieldtype": "number",
                                    "label": "Deduction Dependent Amount",
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
                     "type": "string",
                     "subtype": [
                      {
                    "type": "lowercase",
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
  }
        
  
  
];