const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log('Breed : ', data);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile(
        `${__dirname}/dog-img.txt`,
        res.body.message,
        'utf-8',
        () => {
          console.log('Image saved in file!!!');
        }
      );
    })
    .catch(console.log(err));
});
