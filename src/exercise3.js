exports.run = function(input) {
    obj1=Object.values(input[0]);
    obj2=Object.values(input[1]);
    ans={firstname: obj2[0], name:obj1[0], money : (obj2[1]+obj1[1])}
    return ans;
};
