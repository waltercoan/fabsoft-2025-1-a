# Stage 1: Build
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Production
FROM nginx:alpine AS production

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy built files from the previous stage
COPY --from=build /app/dist/projfabsoft_frontend/browser /usr/share/nginx/html

# Copiar o arquivo environment.runtime.js
COPY /app/src/assets/environment.runtime.js /usr/share/nginx/html/assets/environment.runtime.js

# Substituir o valor da variável apiUrl no runtime
RUN sed -i "s|http://localhost:8080/api/v1|${API_URL}|g" /usr/share/nginx/html/assets/environment.runtime.js

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]