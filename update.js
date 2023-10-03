const neo4j = require('neo4j-driver');

const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', '12345678'));
const session = driver.session();

// UPDATE
// async function updatePersonName(oldName, newName) {
//     try {
//       const result = await session.run(
//         'MATCH (p:Person {name: $oldName}) SET p.name = $newName RETURN p',
//         { oldName, newName }
//       );
//       return result.records[0].get('p').properties;
//     } catch (error) {
//       console.error('Error updating person name:', error);
//       throw error;
//     }
//   }

//   (async () => {
//     try {
//       const updatedPerson = await updatePersonName('Mail', 'Ismail');
//       console.log('Updated Person:', updatedPerson);
//     } finally {
//       session.close();
//       driver.close();
//     }
//   })();

// async function updateAge(session, personName, ageIncrement) {
//     const query = `
//         MATCH (p:Person {name: $personName})
//         SET p.age = coalesce(p.age) + $ageIncrement
//     `;

//     await session.run(query, {
//         personName: personName,
//         ageIncrement: ageIncrement
//     });
// }

// // Eksekusi
// async function main() {
//     const personName = 'Ismail';
//     const ageIncrement = 18;

//     const session = driver.session();

//     try {
//         await updateAge(session, personName, ageIncrement);
//         console.log(`Umur untuk ${personName} berhasil diupdate.`);
//     } finally {
//         await session.close();
//     }
// }

// // Panggil fungsi utama
// main()
//     .catch(error => console.error(`Error: ${error}`))
//     .finally(() => driver.close());