URL Shortener Service

A simple URL shortener service built using Node.js, Express, and MongoDB. This service allows users to shorten long URLs and redirect using a short code.

API Endpoints

 1. Shorten a URL

- **Endpoint:** `POST /api/shorten`
- **Request Body:**
    ```json
    {
      "longUrl": "https://www.example.com/some/very/long/url"
    }
    ```
- **Response:**
    ```json
    {
      "shortUrl": "http://localhost:3000/abc123",
      "longUrl": "https://www.example.com/some/very/long/url",
      "code": "abc123"
    }
    ```

 2. Redirect to Original URL

- **Endpoint:** `GET /:code`
- **Description:** Redirects to the original URL based on the short code.
- **Example:** Accessing `http://localhost:3000/abc123` will redirect to the long URL.

