const neo4j = require('neo4j-driver');

const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', '12345678'));
const session = driver.session();

// const nodeIdToDelete = 12;

// // DELETE
// async function deletePersonByName(name) {
//     try {
//       await session.run(
//         'MATCH (p:Person {name: $name}) DELETE p',
//         { name }
//       );
//       console.log('Person deleted successfully');
//     } catch (error) {
//       console.error('Error deleting person:', error);
//       throw error;
//     }
//   }
  
//   // Example usage
//   (async () => {
//     try {
//       await deletePersonByName('Jane');
//     } finally {
//       session.close();
//       driver.close();
//     }
//   })();
  

// async function deleteFriendship() {
//   try {
//     await session.run(
//       `MATCH (a:Person {name:'Randu'})-[r:BROTHER]->(b:Person {name:'Randu'}) DELETE r`
//     );
//     console.log('Delete Relasi');
//   } catch (error) {
//     console.error('Error creating:', error);
//     throw error;
//   } finally {
//     session.close();
//     driver.close();
//   }
// }


// deleteFriendship();


// async function deleteRelationshipById(relationshipId) {
//   try {
//     await session.run(
//       'MATCH ()-[r]-() WHERE ID(r) = $relationshipId DELETE r',
//       { relationshipId }
//     );
//     console.log('Relationship deleted successfully');
//   } catch (error) {
//     console.error('Error deleting relationship:', error);
//     throw error;
//   }
// }

// // Example usage
// (async () => {
//   try {
//     const relationshipIdToDelete = 11; // Ganti dengan ID relasi yang ingin Anda hapus
//     await deleteRelationshipById(relationshipIdToDelete);
//   } finally {
//     session.close();
//     driver.close();
//   }
// })();

// async function removeAgeProperty(session, personName) {
//     const query = `
//         MATCH (p:Person {name: $personName})
//         REMOVE p.age
//     `;

//     await session.run(query, {
//         personName: personName
//     });
// }

// // Eksekusi
// async function main() {
//     const personName = 'Ismail';

//     const session = driver.session();

//     try {
//         await removeAgeProperty(session, personName);
//         console.log(`Properti age untuk ${personName} berhasil dihapus.`);
//     } finally {
//         await session.close();
//     }
// }

// // Panggil fungsi utama
// main()
//     .catch(error => console.error(`Error: ${error}`))
//     .finally(() => driver.close());


// async function deleteNodeById(session, nodeId) {
//     const query = `
//         MATCH (n)
//         WHERE ID(n) = $nodeId
//         DETACH DELETE n
//     `;

//     await session.run(query, { nodeId: nodeId });
// }

// // Eksekusi
// async function main() {
//     try {
//         await deleteNodeById(session, nodeIdToDelete);
//         console.log(`Node dengan ID ${nodeIdToDelete} berhasil dihapus.`);
//     } finally {
//         await session.close();
//     }
// }

// // Panggil fungsi utama
// main()
//     .catch(error => console.error(`Error: ${error}`))
//     .finally(() => driver.close());