exports.run = function(input) {
    tab = [];
    tab = input.split(',');
    res=0;
    for (i=0;i< tab.length;i++){
        res+=parseInt(tab[i]);
    }
    return res;
};
