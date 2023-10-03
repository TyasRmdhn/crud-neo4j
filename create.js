const neo4j = require('neo4j-driver');

const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', '12345678'));
const session = driver.session();

// async function createMovie() {
//   try {
//     await session.run(
//       `CREATE (a:Movie {title: 'Harry Potter'}) RETURN a`
//     );
//     console.log('create movie');
//   } catch (error) {
//     console.error('Error creating:', error);
//     throw error;
//   } finally {
//     session.close();
//     driver.close();
//   }
// }

// createMovie();



//relasi
// async function createRelationship(personName, personName) {
//   try {
//     const result = await session.run(
//       `MATCH (p:Person {name: $personName}), (m:Person {name: $personName})
//        CREATE (p)-[r:BROTHER]->(m)
//        RETURN r`,
//       { personName, personName}
//     );

//     const createdRelationship = result.records[0].get('r').properties;
//     console.log('Created Relationship:', createdRelationship);
//   } catch (error) {
//     console.error('Error creating relationship:', error);
//     throw error;
//   }
// }

// // Example usage
// (async () => {
//   try {
//     // await createRelationship('Tiyas', 'Harry Potter');
//     await createRelationship('Maul', 'Randu');
//   } finally {
//     session.close();
//     driver.close();
//   }
// })();


// async function createFriendship() {
//   try {
//     await session.run(
//       `MATCH (a:Person {name: 'Ismail'}), (b:Person {name: 'Tiyas'})
//        CREATE (a)-[:BROTHER]->(b)`
//     );
//     console.log('Friendship created');
//   } catch (error) {
//     console.error('Error creating friendship:', error);
//     throw error;
//   } finally {
//     session.close();
//     driver.close();
//   }
// }
// createFriendship()

// Query untuk membuat dua node dan relasi di antara keduanya
// const createRelationshipQuery = `
//   MERGE (a:Person {name: 'Maul'})
//   MERGE (b:Person {name: 'Randu'})
//   MERGE (a)-[:BROTHER]->(b)
//   RETURN a, b
// `;

// // Eksekusi query
// session.run(createRelationshipQuery)
//   .then(result => {
//     result.records.forEach(record => {
//       console.log(record.get('a').properties);
//       console.log(record.get('b').properties);
//     });
//   })
//   .catch(error => console.error(error))
//   .finally(() => {
//     session.close();
//     driver.close();
//   });