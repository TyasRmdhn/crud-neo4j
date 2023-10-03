const neo4j = require('neo4j-driver');

const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', '12345678'));
const session = driver.session();

// async function getPersonByName(name) {
//     try {
//       const result = await session.run(
//         'MATCH (p:Person {name: $name}) RETURN p',
//         { name }
//       );
//       return result.records[0].get('p').properties;
//     } catch (error) {
//       console.error('Error getting person:', error);
//       throw error;
//     }
//   }

//   (async () => {
//     try {
//       const retrievedPerson = await getPersonByName('Mail');
//       console.log('Retrieved Person:', retrievedPerson);
//     } finally {
//       session.close();
//       driver.close();
//     }
//   })();