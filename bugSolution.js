```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const collection = client.db("database").collection("collection");

    // Corrected use of $inc operator
    const result = await collection.updateOne({ name: "John Doe" }, { $inc: { age: -1 } });
    if(result.modifiedCount === 0){
        console.error("No document was updated. Possible reasons include: Incorrect query filter or document not existing.");
    }
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```