# Step 1: Build Stage
FROM node:18 AS build

WORKDIR /src

# Copy dependency files first
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the App with Nginx
FROM nginx:alpine

# Copy build from the previous stage

COPY --from=build /src/dist /usr/share/nginx/html

# Expose default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

