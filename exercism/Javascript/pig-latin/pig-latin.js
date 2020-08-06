"use strict";
class translator {

    static translate(sentence){
	    return sentence.split(' ').map(word=>this.add_ay_to_word(word)).join(' ');
	}

    static add_ay_to_word(word){
        if(this.is_two_letter_word(word) && this.has_second_letter_as_y(word)){
	        return word[1]+word[0]+'ay';
	} 
    
        else if(this.sounds_like_vowel(word)){
	        return word+'ay';
        }

        else if(this.sounds_like_consonant(word)){
            if(this.consonant_followed_by_qu(word)){
                let cluster = word.match(this.get_letters_before("qu"));
                return word.slice(cluster[0].length+2)+cluster[0]+'qu'+'ay';
            }

            else if(this.consonant_followed_by_vowel(word)){
                let cluster =  word.match(this.get_letters_before("[aeiou]"));
                return word.slice(cluster[0].length)+cluster[0]+'ay';
            }

            else if(this.consonant_followed_by_y(word)){
                let cluster =  word.match(this.get_letters_before("y"));
                return word.slice(cluster[0].length)+cluster[0]+'ay';
            }

            else{
                return word+'ay';
            }			
        }

        else{
            console.log("Can't be translated!");
        }

    }
    
    /* Helper functions */
    static sounds_like_vowel(word){
        return (/^[aeiou]/.test(word) || (/^(xr|yt)/.test(word)));
    }

    static sounds_like_consonant(word){
        return (/^[^aeiou]/.test(word));	
    }

    static is_two_letter_word(word){
        return word.length == 2;
    }

    static has_second_letter_as_y(word){
        return word[1]=='y';
    }

    static consonant_followed_by_qu(word){
        return (/^[^aeiou]*(?=(qu))/).test(word);
    }

    static consonant_followed_by_y(word){
        return (/^[^aeiou]*(?=(y))/).test(word);
    }

    static consonant_followed_by_vowel(word){
        return (/^[^aeiou]*(?=([aeiou]))/).test(word);
    }

    static get_letters_before(letter){
        return new RegExp("^[^aeiou]*(?=("+letter+"))");
    }
}
