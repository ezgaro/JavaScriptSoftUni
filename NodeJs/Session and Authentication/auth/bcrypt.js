const bcrypt = require('bcrypt');

const pass1 = "123456";
const hash = '$2b$10$btsdvxHhMjOD53xu9/D5ieKycvl8S2r7Jics2SuMdbAuzOlGjr3We';

async function start() {
  // const hash = await bcrypt.hash(pass1, '$2b$10$btsdvxHhMjOD53xu9/D5ie');
  // console.log(hash);

  console.log(await bcrypt.compare(pass1, hash));

}
start();