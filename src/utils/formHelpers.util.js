/* eslint-disable import/prefer-default-export */
export const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);
