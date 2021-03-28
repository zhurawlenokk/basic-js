//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (members !== undefined && Array.isArray(members) && members !== null) {
    let arr = [];

    members.forEach(item => {
      if (typeof item == 'string') {
        item = item.toUpperCase().trim().split('');

        arr.push(item[0]);

      } else {
        return false

      }
     
    })

    let str = arr.sort().join('');

    return str

  } else {
    return false 
  }

};







