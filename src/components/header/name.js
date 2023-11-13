// const collection = require("../../../mongo");
// async function getUserByName(email) {
//     try {
//       const user = await collection.findOne({ email: email });
//       if (user) {
//         return user.name;
//       } else {
//         return null; // User not found
//       }
//     } catch (error) {
//       console.error("Error fetching user:", error);
//       throw error;
//     }
//   }
  
//   module.exports = { getUserByName };