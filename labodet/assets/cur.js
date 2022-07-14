var eurCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('€','');
        qq = qq + ' €';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('€','');
        qq = qq + ' €';
        item.innerText = qq;
    });
};
var gbpCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var cadCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var aedCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var jpyCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var krwCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var qarCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','');
        qq = qq.replace('QAR','');
        qq = qq + ' QAR';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');

        qq = qq.replace(',','');
        qq = qq.replace('QAR','');
        qq = qq + ' QAR';
        item.innerText = qq;
    });
};
var sarCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var hkdCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var mxnCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('MEX$','');
        qq = qq + ' MEX$';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');

        qq = qq.replace(',',' ');
        qq = qq.replace('MEX$','');
        qq = qq + ' MEX$';
        item.innerText = qq;
    });
};
var thbCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var twdCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var audCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        item.innerText = qq;
    });
};
var chfCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('CHF','');
        qq = qq + ' CHF';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('CHF','');
        qq = qq + ' CHF';
        item.innerText = qq;
    });
};
var khrCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('KHR','');
        qq = qq + ' KHR';
        qq = qq.replace(',',' ');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('KHR','');
        qq = qq + ' KHR';
        qq = qq.replace(',',' ');
        item.innerText = qq;
    });
};
var czkCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('Kč','');
        qq = qq + ' Kč';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('Kč','');
        qq = qq + ' Kč';
        item.innerText = qq;
    });
};
var ronCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('Lei','');
        qq = qq + ' Lei';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('Lei','');
        qq = qq + ' Lei';
        item.innerText = qq;
    });
};
var brlCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','.');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','.');
        item.innerText = qq;
    });
};
var tryCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','.');
        qq = qq.replace('TL','');
        qq = qq + ' TL';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','.');
        qq = qq.replace('TL','');
        qq = qq + ' TL';
        item.innerText = qq;
    });
};
var inrCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','');
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','');
        item.innerText = qq;
    });
};
var rubCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('руб.','');
        qq = qq + ' руб.';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('руб.','');
        qq = qq + ' руб.';
        item.innerText = qq;
    });
};
var uahCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('грн','');
        qq = qq + ' грн';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('грн','');
        qq = qq + ' грн';
        item.innerText = qq;
    });
};
var plnCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('zł','');
        qq = qq + ' zł';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('zł','');
        qq = qq + ' zł';
        item.innerText = qq;
    });
};

var dkkCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','.');
        qq = qq.replace('kr','');
        qq = qq + ' kr';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','.');
        qq = qq.replace('kr','');
        qq = qq + ' kr';
        item.innerText = qq;
    });
};
var bgnCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('BGN','');
        qq = qq + ' BGN';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('BGN','');
        qq = qq + ' BGN';
        item.innerText = qq;
    });
};
var egpCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace('EGP','');
        qq = qq + ' EGP';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace('EGP','');
        qq = qq + ' EGP';
        item.innerText = qq;
    });
};
var sekCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('kr','');
        qq = qq + ' kr';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',',' ');
        qq = qq.replace('kr','');
        qq = qq + ' kr';
        item.innerText = qq;
    });
};
var aznCurrency = function (cart_price,cart_total){
    cart_price.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','');
        qq = qq.replace('AZN','');
        qq = qq + ' AZN';
        item.innerText = qq;
    });
    cart_total.forEach(item => {
        var qq = item.innerText.replace('.00','');
        qq = qq.replace(',','');
        qq = qq.replace('AZN','');
        qq = qq + ' AZN';
        item.innerText = qq;
    });
};