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
      , "i aim to misbehave. <br> -malcolm reynolds"
      , "i ain't lookin' for help from on high. that's a long time waitin' for a train don't come. <br> -malcolm reynolds"
      , "the man who passes the sentence ought to swing the sword. <br> -eddard stark"
      , "and in that sleep of death, what dreams may come... <br> -hamlet"
      , "no - this is nothing. nothing compared to the fear of losing all i have. <br> -shigeo kageyama"
      , "the man in black fled across the desert, and the gunslinger followed. <br> -stephen king"
      , "if we lose our human nature we lose much, but if we lose our bestial nature, we lose everything. <br> -liu cixin"
      , "time is the cruelest force of all. <br> -liu cixin"
      , "it's a wonder to be alive. if you don't understand that, how can you search for anything deeper? <br> -liu cixin"
      , "if we're going to be damned, let's be damned for what we really are. <br> -jean-luc picard"
      , "having great power doesn't mean everything works out for you. but that's perfectly fine, so long as you make the important choices yourself. <br> -shigeo kageyama"
      , "laugh, and the world laughs with you. weep, and you weep alone. <br> -oh dae-su"
      , "revenge is good for your health, but pain will find you again. <br> -oh dae-su"
      , "....that's rad. <br> -kazuma kiryu"
      , "it's always a little harder than you think it's gonna be. <br> -santiago garcia"
      , "with the first link, the chain is forged. <br> -jean-luc picard"
      , "there can be no justice so long as laws are absolute! even life itself is an exercise in exceptions. <br> -jean-luc picard"
      , "pride is not the opposite of shame, but its source. <br> -uncle iroh"
      , "everyone is capable of great good and great evil. treat everyone like they're worth giving a chance. <br> -uncle iroh"
      , "it's easy to do nothing. it's hard to forgive. <br> -aang"
      , "protection and power are overrated. i think you are wise to choose happiness and love. <br> -uncle iroh"
      , "it is important to draw wisdom from different places. if you take it from only one place, it becomes rigid and stale. <br> -uncle iroh"
      , "it's time for you to look inward, and ask yourself the big questions: who ARE YOU, and what do YOU want? <br> -uncle iroh"
      , "a man needs his rest. <br> -uncle iroh"
      , "thinking about what you can't control only wastes energy and creates its own enemy. <br> -worf"
      , "what we leave behind is not as important as how we lived. <br> -jean-luc picard"
      , "i have never subscribed to the theory that political power flows from the barrel of a gun. <br> -jean-luc picard"
      , "of fear and love, i fear not that i will die, but that all i have come to love will perish with me. <br> -android 16"
      , "in a rich man's house there is no place to spit but his face. <br> -diogenes of sinope"
      , "blushing is the color of virtue. <br> -diogenes of sinope"
      , "the foundation of every state is the education of its youth. <br> -diogenes of sinope"
      , "no, emptiness is not nothingness. emptiness is a type of existence. you must use this existential emptiness to fill yourself. <br> -cixin liu"
      , "if you wake up one morning feeling no pain, you know you are dead. <br> -russian proverb"
      , "screw makin' sense. it's about fighting spirit! <br> -metal bat"
      , "the question of whether computers can think is like the question of whether submarines can swim. <br> -edsger dijkstra"
      , "real evil isn't about bending the law to suit justice; evil is acting out of small, intensely personal experience and losing sight of the bigger picture so often that you never get it back again. <br> -karen traviss"
      , "it is foolish to tear one's hair in grief, as though sorrow would be made less by baldness. <br> -cicero"
      , "the rule of friendship means there should be mutual sympathy between them, each supplying what the other lacks and trying to benefit the other, always using friendly and sincere words. <br> -cicero"
      , "gratitute is not only the greatest of virtues, but the parent of all the others. <br> -cicero"
      , "time destroys the speculation of men, but it confirms nature. <br> -cicero"
      , "the greatest pleasures are only narrowly separated from disgust. <br> -cicero"
      , "to be neutral does not mean to be indifferent or insensitive. you don't have to kill your feelings. it's enough to kill hatred within yourself. <br> -geralt of rivia"
      , "for if it's all the rest of us who are killed by the suicide, it's himself who the murderer kills; only he has to do it over, and over, and over. <br> -ursula leguin"
      , "the end justifies the means. but what if there never is an end? all we have is means. <br> -ursula leguin"
      , "things don't have purposes, as if the universe were a machine where every part has a useful function. what's the function of a galaxy? i don't know if our life has a purpose and i don't see that it matters. what does matter is that we're a part. like a thread in a cloth or a grass-blade in a field. It is and we are. what we do is like wind blowing on the grass. <br> -ursula leguin"
      , "a machine is more blameless, more sinless even than any animal. it has no intentions whatsoever but our own. <br> -ursula leguin"
      , "everything dreams. the play of form, of being, is the dreaming of substance. rocks have their dreams, and the earth changes... <br> -ursula leguin"
      , "a man can endure the entire weight of the universe for eighty years. it is unreality that he cannot bear. <br> -ursula leguin"
      , "while it is always best to believe in oneself, a little help from others can be a great blessing. <br> -uncle iroh"
      , "there is no escape - we pay for the violence of our ancestors. <br> -paul muad'dib"
      , "there's no real ending. it's just the place where you stop the story. <br> -frank herbert"
      , "it's all one big meat grinder, man... <br> -rust cohle"
      , "belief can be manipulated. only knowledge is dangerous. <br> -frank herbert"
      , "after everything that's happened, how can the world still be so beautiful? because it is. <br> -margaret atwood",
	"in order to maintain our way of living, we must tell lies to each other, and especially to ourselves. <br> -derrick jensen",
	"somehow, palpatine returned. <br> -fyodor dostoevsky",
	    "he who makes a beast of himself gets rid of the pain of being a man. <br> -raoul duke",
	    "Very few people stood wholly for the law or wholly against it, and so for them the catastrophe of the churn was an annoyance to be avoided or endured or else a titillation on the newsfeeds. That it was a question of life and death for other people spoke in its favor as entertainment. <br> -james sa corey",
	    "You can tell you’ve found a really interesting question when nobody wants you to answer it. <br> ty franck",
	    "I thought if you told people facts, they'd draw their conclusions, and because the facts were true, the conclusions mostly would be too. But we don't run on facts. We run on stories about things. About people. <br> james sa corey"
      );
    
    var rand = quotes[Math.floor(Math.random() * quotes.length)];
    //$("text").text(" " + rand + " ");
   
    $("index.html").ready(function(){
      $("#text").html(rand);
    });
  
