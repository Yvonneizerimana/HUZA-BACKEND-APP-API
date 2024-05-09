const swaggerDocumentation = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Admin API",
      description: "API documentation for HUZA admin",
      license: {
        "name": "MIT",
        "url": "https://opensource.org/license/mit"
    },
    },
    "basePath": "/api",
    tags: [
      {
        name: "Admin",
        description: "HUZA admin API"
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
            '200': {
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
            '200': {
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
            '200': {
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
            '200': {
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
            '200': {
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
            '200': {
              description: "Admin logged out successfully"
            }
          }
        }
      }
    },
    definitions: {
        schemas:{
            admin:{
      AdminCreateRequest: {
        type: "object",
        properties: {
          firstName: { type: "string" },
          lastName: { type: "string" },
          email: { type: "string" },
          phoneNumber: { type: "string" },
          role: { type: "string" },
          password: { type: "string" },
          otp: { type: "number" }
        }
      },
      AdminVerifyRequest: {
        type: "object",
        properties: {
          email: { type: "string" },
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
    }
}
    }
  };
  
  export default swaggerDocumentation