const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, 'utf-8', (err) => {
      if (err) reject(err);
      console.log(`writing in file ${file} : ${data}`);
      resolve('success');
    });
  });
};

async function getDogPic() {
  try {
    const data = await readFilePro(`${__dirname}/dogs.txt`);
    console.log('data : ', data);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log('res : ', res.body.message);

    await writeFilePro(`${__dirname}/dog-img.txt`, res.body.message);
    console.log('File written success full');
  } catch (err) {
    console.log('File not found!');
  }
}
getDogPic();
/*
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log('data : ', data);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log('res : ', res.body.message);
    return writeFilePro(`${__dirname}/dog-img.txt`, res.body.message);
  })
  .then(() => console.log('File written success full'))
  .catch(console.log);
  */
