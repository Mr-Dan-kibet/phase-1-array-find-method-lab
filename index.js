// code your solution here
// index.js

function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  // Export it
  module.exports = { superbowlWin };
  
