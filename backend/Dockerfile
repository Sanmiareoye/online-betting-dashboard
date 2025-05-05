# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /src

# Copy dependency files
COPY package*.json ./
COPY prisma ./prisma/
# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .


# Expose backend port
EXPOSE 8000

# Start the server
CMD ["npm", "run", "dev"]
