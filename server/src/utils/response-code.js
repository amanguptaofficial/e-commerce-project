 const responseCode = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401, // Invalid token / not logged in
  FORBIDDEN: 403, // Logged in, but not allowed
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409, // e.g. Duplicate data
  UNPROCESSABLE_ENTITY: 422, // Validation error
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
};

export default responseCode;