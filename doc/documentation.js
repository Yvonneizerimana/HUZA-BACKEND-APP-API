const swaggerDocumentation = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Admin API",
    description: "API documentation for HUZA   APP",
    license: {
      name: "MIT",
      url: "https://opensource.org/license/mit"
    },
    // renderUrl:{
    // name:"render",
    // url:"https://huza-backend-app-api.onrender.com"
    // }
  },
  basePath: "/api",
  tags: [
    {
      name: "Admin",
      description: "HUZA admin API"
    },
    {
      name: "User",
      description: "USER admin API"
    }
  ],
  paths: {
    "/admin/create": {
      post: {
        summary: "Create a new admin",
        tags: ["Admin"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin data to create",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminCreateRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "New admin created successfully"
          }
        }
      }
    },
    "/admin/verify": {
      post: {
        summary: "Verify admin via OTP",
        tags: ["Admin"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin verification data",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminVerifyRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "Admin verified successfully"
          }
        }
      }
    },
    "/admin/login": {
      post: {
        summary: "Admin login",
        tags: ["Admin"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin login credentials",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminLoginRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "Admin logged in successfully"
          }
        }
      }
    },
    "/admin/forgotPassword": {
      post: {
        summary: "Request to reset admin password",
        tags: ["Admin"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin email for password reset",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminForgotPasswordRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "Password reset link sent successfully"
          }
        }
      }
    },
    "/admin/resetPassword/{resetToken}": {
      post: {
        summary: "Reset admin password",
        tags: ["Admin"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "resetToken",
            description: "Reset token received via email",
            required: true,
            type: "string"
          },
          {
            in: "body",
            name: "body",
            description: "New password for admin",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminResetPasswordRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "Password reset successful"
          }
        }
      }
    },
    "/admin/logout": {
      get: {
        summary: "Logout admin",
        tags: ["Admin"],
        responses: {
          200: {
            description: "Admin logged out successfully"
          }
        }
      }
    },
    "/user/create": {
      post: {
        summary: "Create a new user",
        tags: ["User"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User data to create",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserCreateRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "New user created successfully"
          }
        }
      }
    },
    "/user/verify": {
      post: {
        summary: "Verify user via OTP",
        tags: ["User"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User verification data",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserVerifyRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "User verified successfully"
          }
        }
      }
    },
    "/user/login": {
      post: {
        summary: "User login",
        tags: ["User"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User login credentials",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserLoginRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "User logged in successfully"
          }
        }
      }
    },
    "/user/forgotPassword": {
      post: {
        summary: "Request to reset user password",
        tags: ["User"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User email for password reset",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserForgotPasswordRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "Password reset link sent successfully"
          }
        }
      }
    },
    "/user/resetPassword/{resetToken}": {
      post: {
        summary: "Reset user password",
        tags: ["User"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "resetToken",
            description: "Reset token received via email",
            required: true,
            type: "string"
          },
          {
            in: "body",
            name: "body",
            description: "New password for user",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserResetPasswordRequest"
            }
          }
        ],
        responses: {
          200: {
            description: "Password reset successful"
          }
        }
      }
    },
    "/user/logout": {
      get: {
        summary: "Logout user",
        tags: ["User"],
        responses: {
          200: {
            description: "User logged out successfully"
          }
        }
      }
    }
  },
  definitions: {
    schemas: {
      admin: {
        AdminCreateRequest: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string" },
            phoneNumber: { type: "string" },
            role: { type: "string" },
            password: { type: "string" }
          }
        },
        AdminVerifyRequest: {
          type: "object",
          properties: {
            otp: { type: "number" }
          }
        },
        AdminLoginRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" }
          }
        },
        AdminForgotPasswordRequest: {
          type: "object",
          properties: {
            email: { type: "string" }
          }
        },
        AdminResetPasswordRequest: {
          type: "object",
          properties: {
            password: { type: "string" }
          }
        }
      },
      user: {
        UserCreateRequest: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string" },
            phoneNumber: { type: "string" },
            role: { type: "string" },
            password: { type: "string" }
          }
        },
        UserVerifyRequest: {
          type: "object",
          properties: {
            otp: { type: "number" }
          }
        },
        UserLoginRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" }
          }
        },
        UserForgotPasswordRequest: {
          type: "object",
          properties: {
            email: { type: "string" }
          }
        },
        UserResetPasswordRequest: {
          type: "object",
          properties: {
            password: { type: "string" }
          }
        }
      }
    }
  }
};

export default swaggerDocumentation;
