//Author : Jiratchaya Yeeto

const fs = require('fs');


function TrieNode(key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
}

TrieNode.prototype.getWord = function() {
  var output = [];
  var node = this;

  while (node !== null) {
    output.unshift(node.key);
    node = node.parent;
  }

  return output.join('');
};

function Trie() {
  this.root = new TrieNode(null);
}

Trie.prototype.insert = function(word) {
  var node = this.root;
  for(var i = 0; i < word.length; i++) {
    if (!node.children[word[i]]) {
      node.children[word[i]] = new TrieNode(word[i]);
      node.children[word[i]].parent = node;
    }
    node = node.children[word[i]];
    if (i === word.length-1) {
      node.end = true;
    }
  }
};

Trie.prototype.searchWordinSentence = function(message) {

  //initial
  var firstAlphabet = 0; //get first index of word that contains in file
  var currentAlphabet = 0; //get last index of word that contains in file
  var output = []; //for return index of words in message
  var node = this.root; //for find from root
  var isEnd = false; //check if last index = first alphabet
  var meslenght = message.length-1 //get message last index

  while (!isEnd) {
    //console.log('first' + firstAlphabet);
      if (node.children[message[firstAlphabet]]) {
          var end = false;
          while(!end) {
              //console.log('current' + currentAlphabet);
              if (node.children[message[currentAlphabet]]) {
                  node = node.children[message[currentAlphabet]];
                  currentAlphabet += 1;
              } else if (node.end) {
                  end = true;
                  currentAlphabet = currentAlphabet-1;
                  output.push(firstAlphabet+"-"+currentAlphabet);
                  firstAlphabet = currentAlphabet;
                  node = this.root;
              } else {
                  //console.log('not found');
                  end = true;
                  firstAlphabet = firstAlphabet+1;
                  node = this.root;
              }
          }
      } else if (firstAlphabet >= meslenght) {
          isEnd = true;
          //console.log('endddddddddddddddddddddddddddddddddddddddddddd');
      } else {
          firstAlphabet += 1;
          currentAlphabet = firstAlphabet;
          node = this.root;
      }
  }

  return output;

};

exports.searchNegative = function(sentence) {

  //create trie
  var trietest = new Trie();


  //input file
  var inputNegative = fs.readFileSync('negative.txt', 'utf8');
  var dataN = inputNegative.split("\r"+"\n");

  for(var i=0;i<dataN.length;i++)
  {
    trietest.insert(dataN[i].trim());
  }

  return trietest.searchWordinSentence(sentence);

}

exports.searchSuicidal = function(sentence) {

  //create trie
  var trietest = new Trie();

  //input file
  var inputSuicide = fs.readFileSync('suicidal.txt', 'utf8');
  var dataS = inputSuicide.split("\r"+"\n");

  for(var i=0;i<dataS.length;i++)
  {
    trietest.insert(dataS[i].trim());
  }

  return trietest.searchWordinSentence(sentence);

}
