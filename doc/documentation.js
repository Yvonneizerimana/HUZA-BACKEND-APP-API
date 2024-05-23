

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
    { name: "Booking", description: "Booking API" },
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
            name: "country",
            type: "string",
            description: "Country",
            required: true,
          },
          {
            in: "formData",
            name: "province",
            type: "string",
            description: "Province",
            required: true,
          },
          {
            in: "formData",
            name: "district",
            type: "string",
            description: "District",
            required: true,
          },
          {
            in: "formData",
            name: "sector",
            type: "string",
            description: "Sector",
            required: true,
          },
          {
            in: "formData",
            name: "school",
            type: "string",
            description: "School",
            required: true,
          },
          {
            in: "formData",
            name: "major",
            type: "string",
            description: "Major",
            required: true,
          },
          {
            in: "formData",
            name: "didyoufinished",
            type: "boolean",
            description: "Did you finish?",
            required: true,
          },
          {
            in: "formData",
            name: "timeofstudy",
            type: "string",
            description: "Time of study",
            required: true,
          },
          {
            in: "formData",
            name: "resume",
            type: "file",
            description: "Resume file",
            required: true,
          },
          {
            in: "formData",
            name: "nationalID",
            type: "file",
            description: "National ID file",
            required: true,
          },
          {
            in: "formData",
            name: "certificate",
            type: "file",
            description: "Certificate file",
            required: true,
          },
          {
            in: "formData",
            name: "photo",
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
            name: "country",
            type: "string",
            description: "Country",
           
          },
          {
            in: "formData",
            name: "province",
            type: "string",
            description: "Province",
           
          },
          {
            in: "formData",
            name: "district",
            type: "string",
            description: "District",
            
          },
          {
            in: "formData",
            name: "sector",
            type: "string",
            description: "Sector",
            
          },
          {
            in: "formData",
            name: "school",
            type: "string",
            description: "School",
           
          },
          {
            in: "formData",
            name: "major",
            type: "string",
            description: "Major",
            
          },
          {
            in: "formData",
            name: "didyoufinished",
            type: "boolean",
            description: "Did you finish?",
            
          },
          {
            in: "formData",
            name: "timeofstudy",
            type: "string",
            description: "Time of study",
           
          },
          {
            in: "formData",
            name: "resume",
            type: "file",
            description: "Resume file",
            
          },
          {
            in: "formData",
            name: "nationalID",
            type: "file",
            description: "National ID file",
            
          },
          {
            in: "formData",
            name: "certificate",
            type: "file",
            description: "Certificate file",
            
          },
          {
            in: "formData",
            name: "photo",
            type: "file",
            description: "Photo file",
            
          },
          {
            in: "formData",
            name: "category",
            type: "string",
            description: "Category",
            required: true,
            enum: ["Culnary Art", "Makeup Design", "Brainding", "Plaint"],
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
    "/profile/allProfile": {
      get: {
        summary: "List all profile",
        tags: ["Profile"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "List of all profiles retrieved successfully",
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
    "/booking/createBook": {
      post: {
        summary: "Create a new book",
        tags: ["Booking"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Book data to create",
            required: true,
            schema: {
              $ref: "#/definitions/book/BookCreateRequest"
            },
          },
        ],
        responses: {
          200: {
            description: "New book created successfully",
          },
        },
      },
    },
    "/booking/delete": {
      delete: {
        summary: "Delete a booking",
        tags: ["Booking"],
        consumes: ["application/json"],
        parameters: [
          {
            in: "query",
            name: "id",
            description: "ID of the booking to delete",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Booking deleted successfully",
          },
        },
      },
    },
    "/booking/list/{name}": {
      get: {
        summary: "Get bookings by name",
        tags: ["Booking"],
        parameters: [
          {
            in: "path",
            name: "name",
            description: "Name to search bookings for",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
        },
      },
    },
    "/booking/allbooking": {
      get: {
        summary: "Get all bookings",
        tags: ["Booking"],
        responses: {
          200: {
            description: "OK",
          },
        },
      },
    },
   "/service/createService": {
  post: {
    summary: "Create a new service",
        tags: ["Service"],
        security: [{ BearerAuth: [] }],
        consumes: ["multipart/form-data"],
        parameters: [
          
          {
            in: "formData",
            name: "photo",
            type: "file",
            description: "Photo",
            required: true,
          },
          {
            in: "formData",
            name: "category",
            type: "string",
            description: "Category",
            required: true,
          },
          {
            in: "formData",
            name: "description",
            type: "string",
            description: "Description",
            required: true,
          },
      
    ],
    responses: {
      200: {
        description: "New service created successfully",
      },
    },
  },
},
"/service/updateService/{id}": {
  put: {
    summary: "Update service",
        tags: ["Service"],
        security: [{ BearerAuth: [] }],
        consumes: ["multipart/form-data"],
        parameters: [
          {
            in: "path",
            name: "id",
            type: "string",
            required: true,
            description: "ID of the Service to update",
          },
          {
            in: "formData",
            name: "photo",
            type: "file",
            description: "Photo",
            required: false,
          },
          {
            in: "formData",
            name: "category",
            type: "string",
            description: "Category",
            required: false,
          },
          {
            in: "formData",
            name: "description",
            type: "string",
            description: "Description",
            required: false,
          },
      
    ],
    responses: {
      200: {
        description: "New service created successfully",
      },
    },
  },
},

    "/service/deleteService": {
      delete: {
        summary: "Delete a service",
        tags: ["Service"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "query",
            name: "id",
            description: "ID of the service to delete",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Service deleted successfully",
          },
        },
      },
    },
    "/service/viewService": {
      get: {
        summary: "View service",
        tags: ["Service"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "Service retrieved successfully",
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
    },
    book: {
      BookCreateRequest: {
        type: "object",
        properties: {
          name: { type: "string", required: true },
          phoneNumber: { type: "string", required: true },
          email: { type: "string", required: true },
          address: { type: "string", required: true },
          date: { type: "string", required: true },
          details: { type: "string", required: true }
        },
        required: ["name", "phoneNumber", "email", "address", "date", "details"],
      },
    },
    service: {
      ServiceCreateRequest: {
        type: "object",
        properties: {
          photo: { type: "string" },
          category: { type: "string", required: true },
          description: { type: "string", required: true }
        },
        required: ["category", "description"]
      },
      ServiceUpdateRequest: {
        type: "object",
        properties: {
          photo: { type: "string" }, 
          category: { type: "string" }, 
          description: { type: "string" }
        }
      }
    }
    
    
  },
};

export default swaggerDocumentation;
