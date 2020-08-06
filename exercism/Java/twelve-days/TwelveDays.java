class TwelveDays {
	String [] day = {"first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"};
    String[] gift = {
        "a Partridge in a Pear Tree.",
        "two Turtle Doves, and ",
        "three French Hens, ",
        "four Calling Birds, ",
        "five Gold Rings, ",
        "six Geese-a-Laying, ",
        "seven Swans-a-Swimming, ",
        "eight Maids-a-Milking, ",
        "nine Ladies Dancing, ",
        "ten Lords-a-Leaping, ",
        "eleven Pipers Piping, ",
        "twelve Drummers Drumming, "
    };


    String verse(int verseNumber) {
        String giftTillThatDay ="";
        for(int i = verseNumber-1; i >= 0; i--){
            giftTillThatDay+= gift[i];
        }
        return "On the " + day[verseNumber - 1] + " day of Christmas my true love gave to me: " + giftTillThatDay + "\n";   
    }

    String verses(int startVerse, int endVerse) {
        String allVerses = "";
    	for(int i = startVerse; i <= endVerse; i++){
    	    if(i == startVerse){
    		    allVerses+=verse(i);
    		}else{
    			allVerses+="\n"+verse(i);  		
    		}
     	}
        return allVerses;
    }
    
    String sing() {
        return verses(1,12);
    }
}
