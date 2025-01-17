export const handleError = (error: any): string => {
  return error.response?.data?.message || "An error occurred";
};
