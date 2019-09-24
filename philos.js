/*quote div at bottom*/
    var quotes = Array(
      "everything that happens happens as it should, and if you observe carefully, you will see this to be so. <br> -marcus aurelius"
      , "the wealth required by nature is limited and is easy to procure; but the wealth required by vain ideals extends to infinity. <br> -epicurus"
      , "you have power over your mind - not outside events. realize this, and you will find strength. <br> -marcus aurelius"
      , "waste no more time arguing about what a good man should be. be one. <br> -marcus aurelius"
      , "wealth consists not in having great possesions, but in having few wants. <br> -epictetus"
      , "he who has a why to live can bear almost any how. <br> -friedrich nietzsche"
      , "after your death you will be what you were before your birth. <br> -arthur schopenhauer"
      , "the woods are lovely, dark and deep, <br> but i have promises to keep, <br> and miles to go before i sleep, <br> and miles to go before i sleep. <br> -robert frost"
      , "costs nothing to say something kind. even less to shut up altogether. <br> -malcom reynolds"
      , "hell is other people. <br> -sartre"
      , "this, too, shall pass. <br> -sanai"
      , "it is possible to make no mistakes and lose. that is not failure; that is life. <br> -jean-luc picard"
      , "sometimes the best way to solve your own problems is to help someone else. <br> -uncle iroh"
      , "you come at the king, you best not miss. <br> -omar"
      , "time is an illusion. lunchtime doubly so. <br> -douglas adams"
      , "nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. so come watch tv with me. <br> -morty smith"
      , "i aim to misbehave. <br> -malcolm reynolds"
      , "i ain't lookin' for help from on high. that's a long time waitin' for a train don't come. <br> -malcolm reynolds"
      , "a man chooses. a slave obeys. <br> -andrew ryan"
      , "the man who passes the sentence ought to swing the sword. <br> -eddard stark"
      , "you are, all of you, vermin... <br> cowering in the dirt, thinking thinking what, i wonder? <br> that you might escape the coming fire? no.<br> your world will burn until its surface is but <i>glass.</i> <br> -truth"
      , "and in that sleep of death, what dreams may come... <br> -hamlet"
      , "reports of my assimilation are greatly exaggerated. <br> -jean-luc picard"
      , "accepting the fate of men also means understanding that the fight is rigged, and that every man will either die early or live to see himself decline. <br> - jack donovan"
      , "no - this is nothing. nothing compared to the fear of losing all i have. <br> -shigeo kageyama"
      , "the man in black fled across the desert, and the gunslinger followed. <br> -stephen king"
      , "if we lose our human nature we lose much, but if we lose our bestial nature, we lose everything. <br> -liu cixin"
      , "time is the cruelest force of all. <br> -liu cixin"
      , "it's a wonder to be alive. if you don't understand that, how can you search for anything deeper? <br> -liu cixin"
      , "if we're going to be damned, let's be damned for what we really are. <br> -jean-luc picard"
      , "having great power doesn't mean everything works out for you. but that's perfectly fine, so long as you make the important choices yourself. <br> -shigeo kageyama"
      , "laugh, and the world laughs with you. weep, and you weep alone. <br> -oh dae-su"
      , "revenge is good for your health, but pain will find you again. <br> -oh dae-su"
      , "....that's rad. <br> -kiryu kazuma"
      , "if you're so desparate to write yourself a title, write it in your own blood, not others'. <br> -kiryu kazuma"
      , "it's always a little harder than you think it's gonna be. <br> -santiago garcia"
      , "with the first link, the chain is forged. <br> -jean-luc picard"
      ,"buried deep within you, beneath all the years of pain and anger, there is something that has never been nurtured: the potential to make yourself a better man. and that is what it is to be human - to make yourself more than you are. <br> -jean-luc picard"
      , "there can be no justice so long as laws are absolute! even life itself is an exercise in exceptions. <br> -jean-luc picard"
      , "there's a reason you separate military and police. one fights the enemies of the state, the other serves and protects the people. <br> when the military becomes both, the enemies of the state tend to become the people. <br> -lee adama"
      , "pride is not the opposite of shame, but its source. <br> -uncle iroh"
      , "everyone is capable of great good and great evil. treat everyone like they're worth giving a chance. <br> -uncle iroh"
      , "it's easy to do nothing. it's hard to forgive. <br> -aang"
      , "protection and power are overrated. i think you are wise to choose happiness and love. <br> -uncle iroh"
      , "it is important to draw wisdom from different places. if you take it from only one place, it becomes rigid and stale. <br> -uncle iroh"
      , "i'm BEGGING you, prince zuko! it's time for you to look inward, and ask yourself the big questions: who ARE YOU, and what do YOU want? <br> -uncle iroh"
      , "a man needs his rest. <br> -uncle iroh"
      , "thinking about what you can't control only wastes energy and creates its own enemy. <br> -worf"
      , "what we leave behind is not as important as how we lived. <br> -jean-luc picard"
      , "i have never subscribed to the theory that political power flows from the barrel of a gun. <br> -jean-luc picard"
      , "of fear and love, i fear not that i will die, but that all i have come to love will perish with me. <br> -android 16"
      , "in a rich man's house there is no place to spit but his face. <br> -diogenes of sinope"
      , "blushing is the color of virtue. <br> -diogenes of sinope"
      , "the foundation of every state is the education of its youth. <br> -diogenes of sinope"
      , "no, emptiness is not nothingness. emptiness is a type of existence. you must use this existential emptiness to fill yourself. <br> -cixin liu"
      , "depression, like love, trades in cliches, and it is difficult to speak of it without lapsing into the rhetoric of saccharine pop tunes; it is so vivid when experienced that the notion that others have known anything similar seems altogether implausible. <br> -andrew solomon"
      , "if you wake up one morning feeling no pain, you know you are dead. <br> -russian proverb"
      );
    
    var rand = quotes[Math.floor(Math.random() * quotes.length)];
    //$("philos").text(" " + rand + " ");
   
    $("index.html").ready(function(){
      $("#philos").html(rand);
    });
    console.log(rand);