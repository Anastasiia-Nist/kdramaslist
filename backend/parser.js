/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const puppeteer = require('puppeteer');
const db = require('./db');

function parser() {
  (async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    for (let i = 1; i <= 82; i++) {
      await page.goto(`https://doramy.club/top/page/${i}`);
      const result = await page.evaluate(() => {
        const data = [];
        const elements = document.querySelectorAll('.post-list');

        for (const element of elements) {
          const name = element.childNodes[1].innerText;
          const img = element.querySelector('img').src;
          const info = element.querySelector('table').querySelectorAll('u');
          const year = info[0].innerText;
          const description = info[1].innerText;
          let duration = '';
          const durationT = document.querySelector(
            'body > div > div.middle > main > article > section:nth-child(3) > table.table-hom > tbody > tr > td',
          );
          if (durationT === null) duration = 'Фильм';
          else duration = durationT.innerText.replace(/\n/g, ' ');
          data.push({
            name, img, year, description, duration,
          });
        }
        return Promise.all(data);
      });

      result.forEach((el) => {
        const q = 'INSERT INTO `topdramas` (`data`) VALUES (?)';
        db.query(q, [JSON.stringify(el)], (err) => {
          if (err) console.log(err);
        });
      });
    }
  })();
}

module.exports = parser;
