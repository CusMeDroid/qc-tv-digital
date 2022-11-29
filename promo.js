let prurl = 'https://docs.google.com/spreadsheets/d/1VJl6LG031AZbAt0rzwqqy59-Rgo-boNqffxrOpbp1qc/gviz/tq?';
const promo = document.querySelector('.promo');
const prmquery = encodeURIComponent('Select B,C,D');
console.log(prmquery);
prurl = prurl + '&tq=' + prmquery;

fetch(prurl)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('id', 'promo');
    data.table.rows.forEach((main)=>{
    promo.append(container);
    console.log(main.c[0]);
    const gambar = main.c[0];
    console.log(main.c[1]);
    const title = main.c[1];
    console.log(main.c[2]);
    const link = main.c[2];
    const fullGambar = gambar.v;
    const fullTitle = title.v;
    const fullLink = link.v;
    const alink = document.createElement('a');
    alink.setAttribute('alt', fullTitle);
    alink.setAttribute('title', fullTitle);
    alink.setAttribute('href', fullLink);
    const pimg = document.createElement('img');
    pimg.setAttribute('class', 'me-promo animate-left');
    pimg.setAttribute('src', fullGambar);

    container.appendChild(alink);
    alink.appendChild(pimg);
  })
  console.log(data);
})
