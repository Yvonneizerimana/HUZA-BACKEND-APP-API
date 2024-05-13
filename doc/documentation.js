const swaggerDocumentation = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "API Documentation for HUZA APP",
    description: "Comprehensive API documentation for HUZA APP",

    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/mit",
    },
  },
  securityDefinitions: {
    BearerAuth: {
      type: "apiKey",
      name: "Authorization",

      in: "header",
      description: "Enter your JWT token in the format 'Bearer {token}'",
    },
  },
  basePath: "/api",
  tags: [
    { name: "Admin", description: "HUZA admin API" },
    { name: "User", description: "USER admin API" },
    { name: "Skilled", description: "Skilled people API" },
  ],
  paths: {
    "/admin/create": {
      post: {
        summary: "Create a new admin",
        tags: ["Admin"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin data to create",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminCreateRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New admin created successfully",
          },
        },
      },
    },
    "/admin/verify": {
      post: {
        summary: "Verify admin via OTP",
        tags: ["Admin"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin verification data",

            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminVerifyRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Admin verified successfully",
          },
        },
      },
    },
    "/admin/login": {
      post: {
        summary: "Admin login",
        tags: ["Admin"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin login credentials",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminLoginRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Admin logged in successfully",
          },
        },
      },
    },
    "/admin/forgotPassword": {
      post: {
        summary: "Request to reset admin password",
        tags: ["Admin"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin email for password reset",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminForgotPasswordRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Password reset link sent successfully",
          },
        },
      },
    },
    "/admin/resetPassword/{resetToken}": {
      post: {
        summary: "Reset admin password",
        tags: ["Admin"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "resetToken",
            description: "Reset token received via email",
            required: true,
            type: "string",
          },
          {
            in: "body",
            name: "body",
            description: "New password for admin",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/admin/AdminResetPasswordRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Password reset successful",
          },
        },
      },
    },
    "/admin/logout": {
      get: {
        summary: "Logout admin",
        tags: ["Admin"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "Admin logged out successfully",
          },
        },
      },
    },
    "/user/create": {
      post: {
        summary: "Create a new user",
        tags: ["User"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User data to create",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserCreateRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New user created successfully",
          },
        },
      },
    },
    "/user/verify": {
      post: {
        summary: "Verify user via OTP",
        tags: ["User"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User verification data",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserVerifyRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "User verified successfully",
          },
        },
      },
    },
    "/user/login": {
      post: {
        summary: "User login",
        tags: ["User"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User login credentials",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserLoginRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "User logged in successfully",
          },
        },
      },
    },
    "/user/forgotPassword": {
      post: {
        summary: "Request to reset user password",
        tags: ["User"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "User email for password reset",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserForgotPasswordRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Password reset link sent successfully",
          },
        },
      },
    },
    "/user/resetPassword/{resetToken}": {
      post: {
        summary: "Reset user password",
        tags: ["User"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "resetToken",
            description: "Reset token received via email",
            required: true,
            type: "string",
          },
          {
            in: "body",
            name: "body",
            description: "New password for user",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/user/UserResetPasswordRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Password reset successful",
          },
        },
      },
    },
    "/user/logout": {
      get: {
        summary: "Logout user",
        tags: ["User"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "User logged out successfully",
          },
        },
      },
    },
    "/skilled/createSkilled": {
      post: {
        summary: "Create a new skilled person",
        tags: ["Skilled"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Skilled person data to create",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/skilled/SkilledCreateRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New skilled person created successfully",
          },
        },
      },
    },
    "/skilled/loginSkilled": {
      post: {
        summary: "Skilled person login",
        tags: ["Skilled"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Skilled person login credentials",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/skilled/SkilledLoginRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Skilled person logged in successfully",
          },
        },
      },
    },
    "/skilled/verify": {
      post: {
        summary: "Verify skilled person via OTP",
        tags: ["Skilled"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Skilled person verification data",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/skilled/SkilledVerifyRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Skilled person verified successfully",
          },
        },
      },
    },
    "/skilled/forgotPassword": {
      post: {
        summary: "Request to reset skilled person password",
        tags: ["Skilled"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Skilled person email for password reset",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/skilled/SkilledForgotPasswordRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Password reset link sent successfully",
          },
        },
      },
    },
    "/skilled/resetPassword": {
      post: {
        summary: "Reset skilled person password",
        tags: ["Skilled"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "New password for skilled person",
            required: true,
            schema: {
              $ref: "#/definitions/schemas/skilled/SkilledResetPasswordRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "Password reset successful",
          },
        },
      },
    },
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

            password: { type: "string" },
            confirmpassword: { type: "string" },
          },
        },
        AdminVerifyRequest: {
          type: "object",
          properties: {
            otp: { type: "number" },
          },
        },
        AdminLoginRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
        },
        AdminForgotPasswordRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
          },
        },
        AdminResetPasswordRequest: {
          type: "object",
          properties: {
            password: { type: "string" },
          },
        },
      },
      user: {
        UserCreateRequest: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string" },
            phoneNumber: { type: "string" },

            password: { type: "string" },
            confirmpassword: { type: "string" },
          },
        },
        UserVerifyRequest: {
          type: "object",
          properties: {
            otp: { type: "number" },
          },
        },
        UserLoginRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
        },
        UserForgotPasswordRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
          },
        },
        UserResetPasswordRequest: {
          type: "object",
          properties: {
            password: { type: "string" },
          },
        },
      },
      skilled: {
        SkilledCreateRequest: {
          type: "object",
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" },
            password: { type: "string" },
            confirmpassword: { type: "string" },
          },
          required: ["firstName", "lastName", "email", "phone", "password"],
        },
        SkilledLoginRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
          required: ["email", "password"],
        },
        SkilledVerifyRequest: {
          type: "object",
          properties: {
            otp: { type: "number" },
          },
          required: ["otp"],
        },
        SkilledForgotPasswordRequest: {
          type: "object",
          properties: {
            email: { type: "string" },
          },
          required: ["email"],
        },
        SkilledResetPasswordRequest: {
          type: "object",
          properties: {
            password: { type: "string" },
          },
          required: ["password"],
        },
      },
    },
  },
};

export default swaggerDocumentation;
