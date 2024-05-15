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
  basePath: "/api",
  securityDefinitions: {
    BearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description: "Enter your JWT token in the format 'Bearer {token}'",
    },
  },
  tags: [
    { name: "Admin", description: "Admin API" },
    { name: "User", description: "USER API" },
    { name: "Skilled", description: "Skilled people API" },
    { name: "Profile", description: "Profile API" },
    { name: "Contact", description: "Contact API" },
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
              $ref: "#/definitions/admin/AdminCreateRequest",
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
              $ref: "#/definitions/admin/AdminVerifyRequest",
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
              $ref: "#/definitions/admin/AdminLoginRequest",
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
              $ref: "#/definitions/admin/AdminForgotPasswordRequest",
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
              $ref: "#/definitions/admin/AdminResetPasswordRequest",
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
              $ref: "#/definitions/user/UserCreateRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New user created successfully",
          },
          400:{
            description: "User already exists"
          }
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
              $ref: "#/definitions/user/UserVerifyRequest",
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
              $ref: "#/definitions/user/UserLoginRequest",
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
              $ref: "#/definitions/user/UserForgotPasswordRequest",
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
              $ref: "#/definitions/user/UserResetPasswordRequest",
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
              $ref: "#/definitions/skilled/SkilledCreateRequest",
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
              $ref: "#/definitions/skilled/SkilledLoginRequest",
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
              $ref: "#/definitions/skilled/SkilledVerifyRequest",
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
              $ref: "#/definitions/skilled/SkilledForgotPasswordRequest",
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
              $ref: "#/definitions/skilled/SkilledResetPasswordRequest",
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
    "/profile/createProfile": {
      post: {
        summary: "Create a new profile",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        consumes: ["multipart/form-data"],
        parameters: [
          {
            in: "formData",
            name: "firstName",
            type: "string",
            description: "First name",
            required: true,
          },
          {
            in: "formData",
            name: "lastName",
            type: "string",
            description: "Last name",
            required: true,
          },
          {
            in: "formData",
            name: "email",
            type: "string",
            description: "Email",
            required: true,
          },
          {
            in: "formData",
            name: "Address[country]",
            type: "string",
            description: "Country",
            required: true,
          },
          {
            in: "formData",
            name: "Address[province]",
            type: "string",
            description: "Province",
            required: true,
          },
          {
            in: "formData",
            name: "Address[district]",
            type: "string",
            description: "District",
            required: true,
          },
          {
            in: "formData",
            name: "Address[sector]",
            type: "string",
            description: "Sector",
            required: true,
          },
          {
            in: "formData",
            name: "education[school]",
            type: "string",
            description: "School",
            required: true,
          },
          {
            in: "formData",
            name: "education[major]",
            type: "string",
            description: "Major",
            required: true,
          },
          {
            in: "formData",
            name: "education[didyoufinished]",
            type: "boolean",
            description: "Did you finish?",
            required: true,
          },
          {
            in: "formData",
            name: "education[timeofstudy]",
            type: "string",
            description: "Time of study",
            required: true,
          },
          {
            in: "formData",
            name: "documents[resume]",
            type: "file",
            description: "Resume file",
            required: true,
          },
          {
            in: "formData",
            name: "documents[nationalID]",
            type: "file",
            description: "National ID file",
            required: true,
          },
          {
            in: "formData",
            name: "documents[certificate]",
            type: "file",
            description: "Certificate file",
            required: true,
          },
          {
            in: "formData",
            name: "documents[photo]",
            type: "file",
            description: "Photo file",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "New profile created successfully",
          },
        },
      },
    },
    "/profile/delete/{id}": {
      delete: {
        summary: "Delete a profile",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
            description: "ID of the profile to delete",
          },
        ],
        responses: {
          200: {
            description: "Profile deleted successfully",
          },
        },
      },
    },
    "/profile/update/{id}": {
      put: {
        summary: "Update a profile",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        consumes: ["multipart/form-data"],
        parameters: [
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
            description: "ID of the profile to update",
          },
          {
            in: "formData",
            name: "firstName",
            type: "string",
            description: "First name",
            
          },
          {
            in: "formData",
            name: "lastName",
            type: "string",
            description: "Last name",
            
          },
          {
            in: "formData",
            name: "email",
            type: "string",
            description: "Email",
            
          },
          {
            in: "formData",
            name: "Address[country]",
            type: "string",
            description: "Country",
           
          },
          {
            in: "formData",
            name: "Address[province]",
            type: "string",
            description: "Province",
           
          },
          {
            in: "formData",
            name: "Address[district]",
            type: "string",
            description: "District",
            
          },
          {
            in: "formData",
            name: "Address[sector]",
            type: "string",
            description: "Sector",
            
          },
          {
            in: "formData",
            name: "education[school]",
            type: "string",
            description: "School",
           
          },
          {
            in: "formData",
            name: "education[major]",
            type: "string",
            description: "Major",
            
          },
          {
            in: "formData",
            name: "education[didyoufinished]",
            type: "boolean",
            description: "Did you finish?",
            
          },
          {
            in: "formData",
            name: "education[timeofstudy]",
            type: "string",
            description: "Time of study",
           
          },
          {
            in: "formData",
            name: "documents[resume]",
            type: "file",
            description: "Resume file",
            
          },
          {
            in: "formData",
            name: "documents[nationalID]",
            type: "file",
            description: "National ID file",
            
          },
          {
            in: "formData",
            name: "documents[certificate]",
            type: "file",
            description: "Certificate file",
            
          },
          {
            in: "formData",
            name: "documents[photo]",
            type: "file",
            description: "Photo file",
            
          },
        ],
        responses: {
          200: {
            description: "Profile updated successfully",
          },
        },
      },
    },
    "/contact/createContact": {
      post: {
        summary: "Create a new contact",
        tags: ["Contact"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Contact data to create",
            required: true,
            schema: {
              $ref: "#/definitions/contact/ContactCreateRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "New contact created successfully",
          },
        },
      },
    },
    "/contact/listContact": {
      get: {
        summary: "List all contacts",
        tags: ["Contact"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "List of contacts retrieved successfully",
          },
        },
      },
    },
    "/contact/listContactByEmail": {
      get: {
        summary: "List contacts by email",
        tags: ["Contact"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "email",
            description: "Email to filter contacts",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Contacts retrieved successfully",
          },
        },
      },
    },
    "/contact/listContactByPhone": {
      get: {
        summary: "List contacts by phone number",
        tags: ["Contact"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "phoneNumber",
            description: "Phone number to filter contacts",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Contacts retrieved successfully",
          },
        },
      },
    },
    "/contact/deleteContactById": {
      delete: {
        summary: "Delete contact by ID",
        tags: ["Contact"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "id",
            description: "ID of the contact to delete",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Contact deleted successfully",
          },
        },
      },
    },
  },
  definitions: {
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
    profile: {
      ProfileCreateRequest: {
        type: "object",
        properties: {
          firstName: { type: "string" },
          lastName: { type: "string" },
          email: { type: "string" },
          Address: {
            type: "object",
            properties: {
              country: { type: "string" },
              province: { type: "string" },
              district: { type: "string" },
              sector: { type: "string" },
            },
          },
          education: {
            type: "object",
            properties: {
              school: { type: "string" },
              major: { type: "string" },
              didyoufinished: { type: "boolean" },
              timeofstudy: { type: "string" },
            },
          },
          documents: {
            type: "object",
            properties: {
              resume: { type: "string" },
              nationalID: { type: "string" },
              certificate: { type: "string" },
              photo: { type: "string" },
            },
          },
          pathResume: { type: "string" },
          pathID: { type: "string" },
          pathCertificate: { type: "string" },
          pathPhoto: { type: "string" },
        },
        required: ["firstName", "lastName", "email", "Address", "education", "documents"],
      },
    },
  
  contact: { // Added contact definitions
    ContactCreateRequest: {
      type: "object",
      properties: {
        firstName: { type: "string", required: true },
        lastName: { type: "string", required: true },
        email: { type: "string", required: true, unique: true },
        phoneNumber: { type: "string", required: true, unique: true },
        message: { type: "string", required: true },
      },
      required: ["firstName", "lastName", "email", "phoneNumber", "message"],
    },  
  } 
},
    
};

export default swaggerDocumentation;
