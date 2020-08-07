export const garnishmentFormulaOverrides = [
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
    "id": "garnishment",
    "placeholder": "Enter Override Information",
    "fieldtype": "text",
    "label": "Garnishment",
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
    "id": "startDate",
    "placeholder": "Enter Override Information",
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
    "placeholder": "Enter Override Information",
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
      "minlength": 5,
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
    "placeholder": "Input Section",
    "fieldtype": "number",
    "label": "Flat Amount",
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
    "id": "percent",
    "placeholder": "Input Section",
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
    "placeholder": "Input Section",
    "fieldtype": "string",
    "label": "Priority",
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
        "errmsg": "Please enter a valid number",
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
        "id": "exemptionAmount",
        "placeholder": "Exemption Section",
        "fieldtype": "number",
        "label": "Exemption Amount",
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
            "id": "exemptionDependentAmount",
            "placeholder": "Exemption Section",
            "fieldtype": "number",
            "label": "Exemption Dependent Amount",
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
            "id": "statementOfExemptions",
            "placeholder": "Exemption Section",
            "fieldtype": "number",
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
                "id": "method",
                "placeholder": "Calculation Section",
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
                  "type": "string",
                  "subtype": [
                    {
                      "type": "string",
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
         "id": "calculationPercent",
         "placeholder": "Calculation Section",
         "fieldtype": "number",
         "label": "Calculation Percent",
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
                    "id": "calculationAmount",
                    "placeholder": "Calculation Section",
                    "fieldtype": "number",
                    "label": "Calculation Amount",
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
     "id": "calculationLimit",
     "placeholder": "Calculation Section",
     "fieldtype": "number",
     "label": "Calculation Amount",
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
      "id": "method",
       "placeholder": "Deduction Section",
       "fieldtype": "string",
       "label": "Method",
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
                                  "type": "stringr",
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
                                "id": "deductionFlatAmount",
                                "placeholder": "Deduction Section",
                                "fieldtype": "number",
                                "label": "deduction Flat Amount",
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
             "id": "deductionAmount",
             "placeholder": "Deduction Section",
              "fieldtype": "number",
             "label": "Deduction Amount",
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
                "id": "deductionDependentAmount",
                "placeholder": "Deduction Section",
                 "fieldtype": "number",
                "label": "Deduction Dependent Amount",
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
                        "id": "processDeceasedGarnishment",
                        "placeholder": "Deceased Garnishment",
                        "fieldtype": "number",
                        "label": "Process Deceased Garnishment",
                        "value": "",
                        "errmsg": "",
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
      "id": "deceasedGarnishmentLimit",
       "placeholder": "Deceased Garnishment",
       "fieldtype": "number",
       "label": "Deceased Garnishment Limit",
        "value": "",
        "errmsg": "Please enter a valid number",
         "fieldlength": {
        "minlength":  1,
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
  }
 
  
];