export const logins = [
  {
    "id": "loginName",
    "placeholder": "Enter Login Information",
    "fieldtype": "text",
    "label": "Login Name",
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
    "id": "password",
    "placeholder": "Enter Login Information",
    "fieldtype": "text",
    "label": "Password",
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
    "id": "confirmPassword",
    "placeholder": "Enter Login Information",
    "fieldtype": "text",
    "label": "Confirm Password",
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
    "id": "manageLogins",
    "placeholder": "Enter Login Information",
    "fieldtype": "text",
    "label": "Manage Logins",
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
    "id": "manageDataSets",
    "placeholder": "Enter Login Information",
    "fieldtype": "text",
    "label": "Manage Data Sets",
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
    "id": "userInterfacePermission",
    "placeholder": "Enter Login Information",
    "fieldtype": "text",
    "label": "User Interface Permission",
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
];