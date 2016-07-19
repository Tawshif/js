'use strict';

function user() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " Gave life to " + targetPlayer.name);

    }
}
var buckey = new user();
var wendy = new user();
buckey.name = "Buckey";
wendy.name = "wendy";
buckey.giveLife(wendy);
console.log("Buckey:" + wendy.life);
wendy.giveLife(buckey);
console.log("Wendy:" + buckey.life);

user.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted" + targetPlayer.name);
};

wendy.uppercut(buckey);
console.log(buckey.life);
console.log(wendy.life);
