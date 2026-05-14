// ── clothing items──────────────────────────────────────────────────────────────
//

const items = [
  {
    id: 'unicorn-top',
    title: 'Unicorn Galaxy Top',
    label:  'Unicorn Galaxy Top', 
    desc: 'I love unicorns and galaxy prints!!! I like to bring both fantasy and 2000s nostalgia into my fashion, so this was a perfect $2 find at Savers. I wore this at the MySpace Rave. Hopefully it fit the theme, IDK I was not alive when it was popular. ',
    photo: 'images/myspace.jpg',
    coords: [80, 110, 180, 280]
  },
  {
    id: 'attitude-top',
    label: 'I Love My Attitude Top',
    title: 'I Love My Attitude Top',
    desc: 'I DO love my attitude. At times, I am loud and flashy, just like this shirt. I love clothes that remind me of the clothing I wore when I was a wee lad. A wave of intense nostalgia triggered by my obsession with Kinect Sports, which I grew up playing, was what made me impulsively buy this top off Depop. ',
    photo: 'images/attitudetop.jpg',
    coords: [280, 120, 190, 280]
  },
  {
    id: 'crochet-bag',
    title: 'Crochet Star Bag',
    label: 'Crochet Star Bag',
    desc: 'I crocheted this bag ater watching Star vs. The Forces of Evil since Star Butterfly carried a yellow star bag and I love her. I love fun Western animated shows for kids - I think there is so much meaning and creativity that can be packed into media for a younger audience, especially animated ones. My mom taught me how to crochet since she is a crochet god. Crocheting is one of the main things I associate with my mom. ',
    photo: '',
    coords: [490, 140, 175, 280]
  },
  {
    id: 'pink-dress',
    title: 'Pink Magical Dress',
    label: 'Pink Magical Dress',
    desc: 'I want to be a magical princess... But for cheap. I got this dress for $3 at Savers. I am a frugal princess. I have not really had an occassion for this except when I dressed as Glinda when watching Wicked in theatres with my dad and forced him to dress as Elphaba. He is the only one in my family who still wants to go to movie theatres with me. Movie theatre culture is dying but I shall not let it. ',
    photo: '',
    coords: [700, 130, 210, 330]
  },
  {
    id: 'jellyfish-scarf',
    title: 'Jellyfish Scarf',
    label: 'Jellyfish Scarf',
    desc: 'Scarves are definitely my favorite accessory. I really like how this one reminds me of jellyfish tentacles. Jellyfish remind me of one of my favorite animes: Princess Jellyfish. It centers on fashion expression and gender nonconformation, which I really value. My favorite articles of clothing are, in my head, tied to specific concepts or medias I like. ',
    photo: '',
    coords: [930, 100, 150, 370]
  },
  {
    id: 'rainbow-sweater',
    title: 'Rainbow Sweater',
    label: 'Rainbow Sweater',
    desc: 'I love colorful sweaters. I have a lot of them. My mom was like, "Another one?" I swear they all look different. When I wear them, people have told me I remind them of Enid from the series Wednesday. ',
    photo: 'images/rainbowsweater.jpg',
    coords: [1090, 130, 230, 290]
  },
  {
    id: 'pink-demonias',
    title: 'Pink Demonias Boots',
    label: 'Pink Demonias Boots',
    desc: 'Bought these Demonias on sale in my senior year of high school and wore them everyday despite the complaints of my parents. They became an extension of my legs. Everytime I draw myself, I draw myself in these boots. Humongous shoes are the best but I do not really wear them these days because I am prioritizing the comfort of my feet. ',
    photo: '',
    coords: [140, 550, 185, 200]
  },
  {
    id: 'pink-newrocks',
    title: 'Pink New Rocks',
    label: 'Pink New Rocks',
    desc: 'I received these as a birthday gift from my boyfriend. I really love them because in my head, they are like space shoes. I like the aesthetic of space and what I classify as space things. Putting these 4 inch platforms on make me feel like a video game character. ',
    photo: '',
    coords: [325, 545, 205, 185]
  },
  {
    id: 'mint-bag',
    title: 'Mint Handbag',
    label: 'Mint Handbag',
    desc: 'This is my ride or die handbag. I have been really loving the color mint, especially paired with pink. I like to hang a bunch of charms and plushies on my bags to add personality to them. I also like to hear a lot of jangling with every step I take. ',
    photo: 'images/mintbag.jpg',
    coords: [550, 490, 260, 270]
  },
  {
    id: 'nyan-cat',
    title: 'Nyan Cat Scarf',
    label: 'Nyan Cat Scarf',
    desc: 'I crocheted this Nyan Cat Scarf out of love for the Nyan Cat. Nyan Cat, Pusheen, Tokidoki, Paul Frank, Domo.. I love the cute cartoon characters of the 2010s. I crocheted it while watching BTS videos with my mom last summer - a time I really miss. I threw together a last-minute Nyan Cat costume on the night of a Halloween party and wore this scarf then. ',
    photo: 'images/nyancat.jpg',
    coords: [850, 620, 300, 130]
  },
  {
    id: 'pink-furs',
    title: 'Pink Fur Leg Warmers',
    label: 'Pink Fur Leg Warmers',
    desc: 'Fur leg warmers have been an outfit essential for me lately. I have different colors but these hot pink ones are my favorite. I wore them for my Pinkie Pie cosplay at SacAnime recently, which was so much fun and inspired me to want to cosplay more in the future! I have been obsessed with cosplay culture recently.',
    photo: 'images/cosplay.jpg',
    coords: [1180, 580, 195, 175]
  }
];


// ── hit arwas───────────────────────────────────────────────────────

const wrapper = document.getElementById('closetWrapper');

items.forEach(item => {
  const [left, top, width, height] = item.coords;

  const div = document.createElement('div');
  div.className = 'hit-area';

  div.dataset.label = item.label; 

  div.style.left   = left   + 'px';
  div.style.top    = top    + 'px';
  div.style.width  = width  + 'px';
  div.style.height = height + 'px';

  div.addEventListener('click', () => openPopup(item.id));

  wrapper.appendChild(div);
});


// ── pops ups───────────────────────────────────────────────────────────

const overlay             = document.getElementById('overlay');
const popupTitle          = document.getElementById('popupTitle');
const popupDesc           = document.getElementById('popupDesc');
const popupImg            = document.getElementById('popupImg');
const popupImgPlaceholder = document.getElementById('popupImgPlaceholder');

function openPopup(id) {
  const item = items.find(i => i.id === id);

  popupTitle.textContent = item.title;
  popupDesc.innerHTML    = item.desc;

  if (item.photo) {
    popupImg.src                      = item.photo;
    popupImg.style.display            = 'block';
    popupImgPlaceholder.style.display = 'none';
  } else {
    popupImg.src                      = '';
    popupImg.style.display            = 'none';
    popupImgPlaceholder.style.display = 'block';
  }

  overlay.classList.add('active');
}

function closePopup() {
  overlay.classList.remove('active');
}

document.getElementById('popupClose').addEventListener('click', closePopup);
document.getElementById('overlayBackdrop').addEventListener('click', closePopup);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePopup();
});
