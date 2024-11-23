const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({ path: "./config.env" });

// Create a MongoClient with options for Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database;

const connectToServer = async () => {
  const maxRetries = 5;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await client.connect(); // Connect to MongoDB server
      database = client.db("blogData"); // Access the "blogData" database
      console.log("Successfully connected to MongoDB.");
      return;
    } catch (err) {
      retries++;
      console.error(`Failed to connect to MongoDB. Attempt ${retries} of ${maxRetries}`);
      if (retries === maxRetries) {
        throw new Error("Max retries reached. Could not connect to MongoDB.");
      }
      // Wait 2 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
};

const getDb = (dbName = "blogData") => {
  if (!database) {
    throw new Error("Database not initialized. Call connectToServer first.");
  }
  return client.db(dbName); // Access any database dynamically
};

// Gracefully handle shutdown
process.on("SIGINT", async () => {
  console.log("Closing MongoDB connection...");
  await client.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

module.exports = { connectToServer, getDb };
