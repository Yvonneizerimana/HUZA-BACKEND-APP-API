

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
    { name: "AllUsers", description: "User's API" },
    { name: "Profile", description: "Profile API" },
    { name: "Contact", description: "Contact API" },
  ],
  paths: {
    "/allUsers/create": {
      post: {
        summary: "Create a new admin",
        tags: ["AllUsers"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin data to create",
            required: true,
            schema: {
              $ref: "#/definitions/allUsers/AllUsersCreateRequest",
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
    "/allUsers/verify": {
      post: {
        summary: "Verify admin via OTP",
        tags: ["AllUsers"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin verification data",
            required: true,
            schema: {
              $ref: "#/definitions/allUsers/AllUsersVerifyRequest",
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
    "/allUsers/login": {
      post: {
        summary: "Admin login",
        tags: ["AllUsers"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin login credentials",
            required: true,
            schema: {
              $ref: "#/definitions/allUsers/AllUsersLoginRequest",
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
    "/allUsers/forgotPassword": {
      post: {
        summary: "Request to reset admin password",
        tags: ["AllUsers"],
        security: [{ BearerAuth: [] }],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Admin email for password reset",
            required: true,
            schema: {
              $ref: "#/definitions/allUsers/AllUsersForgotPasswordRequest",
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
    "/allUsers/resetPassword/{resetToken}": {
      post: {
        summary: "Reset admin password",
        tags: ["AllUsers"],
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
              $ref: "#/definitions/allUsers/AllUsersResetPasswordRequest",
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
    "/allUsers/logout": {
      get: {
        summary: "Logout admin",
        tags: ["AllUsers"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "Admin logged out successfully",
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
          {
            in: "formData",
            name: "category",
            type: "string",
            description: "Category",
            required: true,
            enum: ["Culnary Art", "Makeup Design", "Branding", "Plaint"],
          },
          {
            in: "formData",
            name: "status",
            type: "string",
            description: "Status",
            required: false,
            enum: ["Pending", "Approved", "Rejected"],
            default: "Pending",
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
          {
            in: "formData",
            name: "category",
            type: "string",
            description: "Category",
            required: true,
            enum: ["Culnary Art", "Makeup Design", "Branding", "Plaint"],
          },
          {
            in: "formData",
            name: "status",
            type: "string",
            description: "Status",
            required: false,
            enum: ["Pending", "Approved", "Rejected"],
            default: "Pending",
          },
        ],
        responses: {
          200: {
            description: "Profile updated successfully",
          },
        },
      },
    },
    "/profile/viewProfileById": {
      get: {
        summary: "View profile by ID",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "id",
            description: "ID of the profile to view",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Profile retrieved successfully",
          },
        },
      },
    },
    "/profile/viewProfileByCategory": {
      get: {
        summary: "View profile by category",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "category",
            description: "enter category to approve",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Profile retrieved successfully",
          },
        },
      },
    },
    "/profile/approveProfile": {
      get: {
        summary: "Approve profile by ID",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "id",
            description: "ID of the profile to approve",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Profile approved successfully",
          },
        },
      },
    },
    "/profile/reject": {
      get: {
        summary: "Reject profile by ID",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "email",
            description: "Email of the profile to reject",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Profile rejected successfully",
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
    // Profile routes
    "/profile/viewProfileById": {
      get: {
        summary: "View profile by ID",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "id", 
            description: "ID of the profile to view",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Profile retrieved successfully",
          },
        },
      },
    },
  },
  definitions: {
    allUsers: {
      AllUsersCreateRequest: {
        type: "object",
        properties: {
          firstName: { type: "string" },
          lastName: { type: "string" },
          email: { type: "string" },
          phoneNumber: { type: "string" },
          role: { type: "string" },
          password: { type: "string" },
          confirmpassword: { type: "string" },
        },
        required: ["email", "password"],
      },
      AllUsersVerifyRequest: {
        type: "object",
        properties: {
          otp: { type: "string" }
        },
        required: ["email", "otp"],
      },
      AllUsersLoginRequest: {
        type: "object",
        properties: {
          email: { type: "string" },
          password: { type: "string" },
        },
        required: ["email", "password"],
      },
      AllUsersForgotPasswordRequest: {
        type: "object",
        properties: {
          email: { type: "string" },
        },
        required: ["email"],
      },
      AllUsersResetPasswordRequest: {
        type: "object",
        properties: {
          password: { type: "string" },
        },
        required: ["newPassword"],
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
          category: {
            type: "string",
            required: true,
            enum: ["Culnary Art", "Makeup Design", "Branding", "Plaint"],
          },
        },
        required: ["firstName", "lastName", "email", "Address", "education", "documents","category"],
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
