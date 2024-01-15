# security 

Web application designed as an educational tool to explore and understand two specific categories of web application vulnerabilities: Cross-Site Scripting (XSS) and Sensitive Data Exposure. Available at: https://main--stately-cocada-a70cfc.netlify.app/

1. Cross-Site Scripting (XSS): The application's "name" input field is intentionally left unsanitized to demonstrate XSS vulnerability. For example, entering `<img src onerror="alert('hacked')">` will execute an XSS attack. Conversely, the "surname" input field is sanitized, preventing such attacks and illustrating effective defense measures.

2. Sensitive Data Exposure: Passwords are stored in a list within the application. By clicking the "Toggle Exposure" button, users can toggle the visibility of these passwords in plaintext, showcasing the risks and mechanisms of sensitive data exposure.
