exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (item == arr[i]) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  reverseString : function(str) {
    return str.split("").reverse().join("");
  },

  longestSubString : function(str) {
    var strArray = str.split(" ");
    var longString = " ";
    for (var i = 0; i < strArray.length; i++){
      if (longString.length < strArray[i].length){
        longString = strArray[i];
      }
    }
    return longString;
  },

  letterMoveForward : function(str) {
    var letters = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA".split('');
    var characters = str.split('');
    var newString = "";

    for (var i = 0; i < characters.length; i++) {
      if (letters.findIndex(x => x == characters[i]) != -1) {
        newString += letters[letters.findIndex(x => x == characters[i])  + 1];
      }
      else {
        newString += characters[i];
      }
    }
    return newString;
  },

  capitalizeWords : function(str) {
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++){
        strArray[i]  = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
    }
    return strArray.join(" ");
  }
};
