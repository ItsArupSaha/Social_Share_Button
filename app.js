const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-option');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})

const link = encodeURI('https://openjavascript.info');
const msg = encodeURIComponent("Hi, everyone");
const title = encodeURIComponent(document.querySelector('title').textContent);

const fb = document.querySelector('.fb-btn');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const whatsapp = document.querySelector('.wa-btn');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;

const twitter = document.querySelector('.twitter-btn');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const linkedIn = document.querySelector('.ln-btn');
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;