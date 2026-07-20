FROM docker.io/library/node:24.18

# Install the Angular CLI globally as root
RUN npm install -g npm@latest
RUN npm install -g @angular/cli

# Switch back to the non-root user for development safety
USER node
