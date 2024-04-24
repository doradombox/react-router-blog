const devBaseUrl = "http://localhost:8081/springbootdemo/";
const productBaseUrl = "http://localhost";

export const BASE_URL =
  process.env.NODE_ENV == "development" ? devBaseUrl : productBaseUrl;
export const TIMEOUT = 5000;
