(function(){
  'use strict';

  const form = document.querySelector('#madlibs');
  const result = document.querySelector('#result');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    const noun1 = document.querySelector('#noun1').value;
    const adj1 = document.querySelector('#adj1').value;
    const noun2 = document.querySelector('#noun2').value;
    const creature1 = document.querySelector('#creature1').value;

    const creature2 = document.querySelector('#creature2').value;
    const noun3 = document.querySelector('#noun3').value;

    const adverb = document.querySelector('#adverb').value;
    const weapon = document.querySelector('#weapon').value;

    const verb1 = document.querySelector('#verb1').value;
    const food1 = document.querySelector('#food1').value;

    const food2 = document.querySelector('#food2').value;
    const singer = document.querySelector('#singer').value;

const story = `



<p>
Once upon a time…<br><br>

There was a magical princess, the Princess Kate of the <b>${noun1}</b> Kingdom. 
She was a <b>${adj1}</b> princess, with the magical ability to blast 
<b>${noun2}</b> from her magic wand. 
She never goes on adventures without her pet <b>${creature1}</b>, 
who’s basically her sidekick!
<br><br>

One day, Princess Kate’s kingdom was under attack by the super bad and scary villain: 
Mister <b>${creature2}</b> of the <b>${noun3}</b> Planet!!! OH NO!!!!
<br><br>

Kingdom citizens were <b>${adverb}</b> in terror as the villain cast a big, scary spell using his 
<b>${weapon}</b> of destruction. Things were looking grim…
<br><br>

BUT DON’T FRET! Princess Kate is here to save the day!
<br><br>

She pointed her wand at the sky and screamed out her famous magical catchphrase: 
“<b>${verb1}</b> <b>${food1}</b>!!!!” 
An enormous sparkly rainbow blasted out her wand and pierced through the darkness, 
ridding the kingdom of the evil spell.
<br><br>

She offered her hand to the villain, who was wallowing in his defeat, and said: 
“You don’t have to be the bad guy!” The villain smiled and they became best friends.
<br><br>

And just like that, the kingdom was saved. Everyone threw a big party with their favorite food, 
<b>${food2}</b>, and danced the night away to <b>${singer}</b>.
</p>
`;

    result.innerHTML = story;
    form.style.display = "none";

    form.reset();
  });

})();
