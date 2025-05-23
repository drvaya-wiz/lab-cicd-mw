FROM node:10

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production

# Download a harmless test file from an online repository
# RUN wget https://secure.eicar.org/eicarcom2.zip -O harmless_test.zip
RUN wget https://www.eicar.org/download/eicar-com-2 -O eicar-test.txt

# Copy the local code to the container
COPY . .
# RUN unzip harmless_test.zip
CMD ["echo", "Test file downloaded successfully. You can now scan eicar-test.txt"]

# Build production app
# RUN npm run Build

# Start the service
CMD npm start




