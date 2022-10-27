let url = 'https://docs.google.com/spreadsheets/d/1-9Fb7S5YtfD8quHJdESZlbiBemK_5qd3tSm4exlkAog/gviz/tq?';
const lkjs = document.querySelector('.lkjs');
const query = encodeURIComponent('Select B,C,D,E,F,G');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('class', 'row uvh');
    data.table.rows.forEach((main)=>{
    lkjs.append(container);
    console.log(main.c[0]);
    const imgna = main.c[0];
    console.log(main.c[1]);
    const titlena = main.c[1];
    console.log(main.c[2]);
    const descna = main.c[2];
    console.log(main.c[3]);
    const linkna = main.c[3];
    console.log(main.c[4]);
    const pricena = main.c[4];
    console.log(main.c[5]);
    const stockna = main.c[5];
    const fullLink = imgna.v;
    const fullTit = titlena.v;
    const fullDes = descna.v;
    const fullHref = linkna.v;
    const fullPrice = pricena.v;
    const fullStock = stockna.v;
    console.log(fullLink);
    const column = document.createElement('div');
    const card = document.createElement('div');
    //const link = document.createElement('a');
    const elem = document.createElement('iframe');
    const huah = document.createElement('h2');
    const desc = document.createElement('p');
    const bbtn = document.createElement('button');
    const hreff = document.createElement('a');
    column.setAttribute('class', 'column4');
    card.setAttribute('class', 'card');
    //link.setAttribute('href', fullHref);
    // link.setAttribute('target', '_blank');
    //link.setAttribute('title', 'CusMeDroid');
    //link.setAttribute('style', 'display: block;');
    elem.setAttribute('src', fullLink);
    elem.setAttribute('title', fullTit);
    elem.setAttribute('alt', fullTit);
    elem.setAttribute('class', 'card-img hiframe');
    huah.innerHTML = fullTit;
    huah.setAttribute('class', 'black Audiowide padd-8');
    desc.innerHTML = 'Rp.'+fullPrice + '<br>' + fullDes + '<br>' + '<b>Stok ' + fullStock + '</b>';
    desc.setAttribute('class', 'padd-8 Trirong');
    bbtn.setAttribute('class', 'Trirong green radius-20 blog-btn');
    if (fullStock == '0') {
        hreff.setAttribute('title', 'Pre Order Sekarang ' + fullTit);
        hreff.innerHTML = 'Pre Order';
        hreff.setAttribute('class', 'padd-4 Trirong white size-16');
        hreff.setAttribute('href', 'https://forms.gle/ius5GDxnpi9LcutRA');
        hreff.setAttribute('target', '_blank');
    } else {
        hreff.setAttribute('title', 'Beli Sekarang ' + fullTit);
        hreff.innerHTML = 'Beli';
        hreff.setAttribute('class', 'padd-4 Trirong white size-16');
        hreff.setAttribute('href', fullHref + fullTit + '%0AHarga%20Rp.' + fullPrice + '%0AKirim%20ke%20alamat%20:%20*Isi Alamat Kamu.*%0A%0ATerimakasih%20:).');
        hreff.setAttribute('target', '_blank');
    }

    container.appendChild(column);
    column.appendChild(card);
    card.appendChild(elem);
    // link.appendChild(elem);
    card.appendChild(huah);
    card.appendChild(desc);
    bbtn.appendChild(hreff);
    card.appendChild(bbtn);
  })
  console.log(data);
})
