```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const collection = client.db("database").collection("collection");

    // Incorrect use of $inc operator causing unexpected results
    const result = await collection.updateOne({ name: "John Doe" }, { $inc: { age: -1 } });

    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```