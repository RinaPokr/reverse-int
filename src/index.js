module.exports = function reverse (n) {
    let res = 0;
if (n >= 0) {
   let n1 = String(n);
        res = +(n1.split('').reverse().join('')); 
} else {
    let n1 = String((-1)*n);
console.log(n1);
    res = (+(n1.split('').reverse().join('')));  
}
    
    return res;
    }

