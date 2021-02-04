function camelcase(s) {
   let count = 1;
   for(let i in s){
    if(s.charAt(i) === s.charAt(i).toUpperCase()){
      count++
    }
   }
   return count
}

console.log(camelcase("saveChangesInTheEditor"));