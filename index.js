//oh my god this file is a mess what have I done to mysel fajsdlkfja;slkdfjoiejfa;lkjsdjf;eljlaksdf
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'redacted';
const admin = require('firebase-admin');
var prefix = '/';

let serviceAccount = require('./serviceAccountKey.json');
const { firestore } = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

//my silly constants
var users = [];

client.on('ready', () => {
    console.log('war-bot is online');
});

//functions
async function checkUser(person){
    let docRef = db.collection('users');
    let query = await docRef.where('name', '==', person).get()
    .then(snapshot => {
        if (snapshot.empty) {
            console.log('No matching documents.');
            return false; 
        } else if (!snapshot.empty) {
            return true;
        }
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
    console.log(query);
    return query;
}
 
async function getWeapon(person) {
  console.log('checkWeapon', person)
  let collectionRef = db.collection('users');
  let docRef = collectionRef.doc(person);

  let fuck = await docRef.get().then((doc) => {
    if (doc.exists) {
      cock = doc.data();
      console.log('Cock data:', doc.data());
      return cock.equippedWeapon;
    }
  }).catch((e)=> { console.log('catch: ',e); });
  return fuck;
}

function findCollection(weapon){
  var document = '';
  if (weapon === 'compound-bow-basic' || weapon === 'compound-bow-medium' || weapon === 'compound-bow-ultimate' || weapon === 'compound-bow'){
      document = 'ranged-weapons';
  } else if (weapon === 'hand-crossbow-basic' || weapon === 'hand-crossbow-medium' || weapon === 'hand-crossbow-ultimate' || weapon === 'hand-crossbow'){
      document = 'ranged-weapons';
  } else if (weapon === 'heavy-crossbow-basic' || weapon === 'heavy-crossbow-medium' || weapon === 'heavy-crossbow-ultimate' || weapon === 'heavy-crossbow'){
      document = 'ranged-weapons';
  } else if (weapon === 'hunting-bow-basic' || weapon === 'hunting-bow-medium' || weapon === 'hunting-bow-ultimate' || weapon === 'hunting-bow'){
      document = 'ranged-weapons';
  } else if (weapon === 'long-bow-basic' || weapon === 'long-bow-medium' || weapon === 'long-bow-ultimate' || weapon === 'long-bow'){
      document = 'ranged-weapons';
  } else if (weapon === 'slingshot-basic' || weapon === 'slingshot-medium' || weapon === 'slingshot-ultimate' || weapon === 'slingshot'){
      document = 'ranged-weapons';
  } else if (weapon === 'axe-basic' || weapon === 'axe-medium' || 'axe-ultimate' || weapon === 'axe'){
      document = 'weapons-heavy-class';
  } else if (weapon === 'heavy-axe-basic' || weapon === 'heavy-axe-medium' || weapon === 'heavy-axe-ultiamte' || weapon === 'heavy-axe'){
      document = 'weapons-heavy-class';
  } else if (weapon === 'mace-basic' || weapon === 'mace-medium' || weapon === 'mace-ultimate' || weapon === 'mace'){
      document = 'weapons-heavy-class';
  } else if (weapon === 'sledge hammer-basic' || weapon === 'sledge hammer-medium' || weapon === 'sledge hammer-ultimate' || weapon === 'sledge hammer'){
      document = 'weapons-heavy-class';
  } else if (weapon === 'war hammer-basic' || weapon === 'war hammer-medium' || weapon === 'war hammer-ultimate' || weapon === 'war hammer'){
      document = 'weapons-heavy-class';
  } else if (weapon === 'brass-knuckles-basic' || weapon === 'brass-knuckles-medium' || weapon === 'brass-knuckles-ultimate' || weapon === 'brass-knuckles'){
      document = 'weapons-light-class';
  } else if (weapon === 'butterfly-knives-basic' || weapon === 'butterfly-knives-medium' || weapon === 'butterfly-knives-ultimate' || weapon === 'butterfly-knives'){
      document = 'weapons-light-class';
  } else if (weapon === 'dagger-basic' || weapon === 'dagger-medium' || weapon === 'dagger-ultimate' || weapon === 'dagger'){
      document = 'weapons-light-class';
  } else if (weapon === 'dirk-basic' || weapon === 'dirk-medium' || weapon === 'dirk-ultimate' || weapon === 'dirk'){
      document = 'weapons-light-class';
  } else if (weapon === 'meat-cleaver-basic' || weapon === 'meat-cleaver-medium' || weapon === 'meat-cleaver-ultimate' || weapon === 'meat-cleaver'){
      document = 'weapons-light-class';
  } else if (weapon === 'sai-basic' || weapon === 'sai-medium' || weapon === 'sai-ultimate' || weapon === 'sai'){
      document = 'weapons-light-class';
  } else if (weapon === 'stiletto-basic' || weapon === 'stilletto-medium' || weapon === 'stiletto-ultiamte' || weapon === 'stiletto'){
      document = 'weapons-light-class';
  } else if (weapon === 'focusing-stone'){
      document = 'weapons-magic-class';
  } else if (weapon === 'focusing-sword'){
      document = 'weapons-magic-class';
  } else if (weapon === 'spell-book'){
      document = 'weapons-magic class';
  } else if (weapon === 'staff'){
      document = 'weapons-magic-class';
  } else if (weapon === 'wand'){
      document = 'weapons-magic-class';
  } else if (weapon === 'arming-sword-basic' || weapon === 'arming-sword-medium' || weapon === 'arming-sword-ultimate' || weapon === 'arming-sword'){
      document = 'weapons-medium-class';
  } else if (weapon === 'claymore-basic' || weapon === 'claymore-medium' || weapon === 'claymore-ultimate' || weapon === 'claymore'){
      document = 'weapons-medium-class';
  } else if (weapon === 'long-sword-basic' || weapon === 'long-sword-medium' || weapon === 'long-sword-ultimate' || weapon === 'lamp-sword'){
      document = 'weapons-medium-class';
  } else if (weapon === 'rapier-basic' || weapon === 'rapier-medium' || weapon === 'rapier-ultimate' || weapon === 'rapier'){
      document = 'weapons-medium-class';
  } else if (weapon === 'short-sword-basic' || weapon === 'short-sword-medium' || weapon === 'short-sword-ultimate' || weapon === 'short-sword'){
      document = 'weapons-medium-class';
  } else if (weapon === 'sword-basic' || weapon === 'sword-medium' || weapon === 'sword-ultimate' || weapon === 'sword'){
      document = 'weapons-medium-class';
  } else {
      document = 'none';
  }
  return document;
}

function calculateAccuracy(weapon){
    console.log('weapon',weapon);
    var level;
    var levelArr = weapon.split("-");
    level = levelArr.shift();
    let baseWeapon = levelArr.join('-');

    var document = findCollection(weapon);

    var accuracy = Math.random() * (10 - 1) + 1;
    var damage = 0;
    var fists = true;
    console.log('baseWeapon is: ', baseWeapon);
    let docRef = db.collection(document).doc(baseWeapon);
    let getDoc = docRef.get()
        .then(doc => {
            if (!doc.exists){
                fists = false;
            } else if (level = 'basic') {
                var obj = doc.data();
                damage = obj.basic-damage;
            } else if (level = 'medium') {
                var obj = doc.data();
                damage = obj.improved-damage;
            } else if (level = 'ultimate'){
                var obj = doc.data();
                damage = obj.ultimate-damage;
            }
        });
    console.log('changed-damage: ',damage);
    if (fists === true){
        return 1;
    } else {
        return damage/accuracy;
    }
}

async function inflictDamage(inflictedDamage, user, channel){

    let docRefOne = db.collection('users').doc(user);
    let oldHealth = await docRefOne.get()
        .then(doc => {
            var obj = doc.data();
            return obj.healthPoints;
        }).catch((e)=> { console.log('catch: ',e); });

    console.log('old health: ',oldHealth);

    var newHealth = oldHealth - inflictedDamage;

    let docRefTwo = db.collection('users').doc(user);

        let setAda = docRefTwo.set({
           healthPoints: newHealth
        });

    if (newHealth <= 0){
        let docRef = db.collection('users').doc(user);
            let setData = docRef.set({
                XP: 0
            });
        channel.send(user + ' has died, RIP their XP');
    } else {
        channel.send(user + ' has ' + newHealth.toString() + ' health points left');
    }
}

async function checkWeaponExist(weapon){
  var collection = findCollection(weapon);
  console.log('collection: ',collection);
  console.log('weapon: ',weapon);
  let docRef = db.collection(collection).doc(weapon);
  let getDoc = await docRef.get()
    .then(doc => {
      if (!doc.exists){
        return false;
      } else {
        return true;
      }
    });
  console.log(getDoc);
  return getDoc;
}

async function checkHasWeapon(user, weapon){
  var hasWeapon = false;
  var person = await db.collection('users').doc(user).get().then(doc => {
      var obj = doc.data();
      return obj.inventory;
  }).catch((e)=> { console.log('catch: ',e); });
  var weaponsArray = person;
  var i;
  for (i=0;i<=weaponsArray.length;i++){
    if (weaponsArray[i] === weapon){
      hasWeapon = true;
    } else {
      console.log('nope');
    }
  }
  return hasWeapon;
}

async function checkPrice(weapon, user){

  var collection = findCollection(weapon);
  let personXP = await db.collection('users').doc(user).get().then(doc => {
      var obj = doc.data();
      return obj.XP;
  }).catch((e)=> { console.log('catch: ',e); });
  let itemXP = await db.collection(collection).doc(weapon).get().then(doc => {
      var obj = doc.data();
      return obj.cost;
  }).catch((e)=> { console.log('catch: ',e); });

  if (itemXP > personXP){
    console.log('returning false');
    return false;
  } else {
    console.log('returning array: ',[personXP, itemXP]);
    return [personXP, itemXP];
  }
}

function addWeapon(personXP, weaponXP, user, weapon){
  var leftXP = personXP - weaponXP;
  let docRef = db.collection('users').doc('user');
  var inventory = docRef.inventory;
  var newInventory = inventory.push(weapon);
  let setData = docRef.set({
    XP: leftXP,
    inventory: newInventory
  });
}

//add new users to the database
client.on('guildMemberAdd', member => {
    users = member.guild.roles.everyone.members.map(m=>m.user.tag);
    var i;
    for (i=0;i<users.length;i++){
        let docRef = db.collection('users').doc(users[i]);

        let setAda = docRef.set({
            name: users[i].toString(),
            healthPoints: 100,
            XP: 0,
            equippedWeapon: 'default-fist',
            inventory: []
        });
    }
});

//message handler
client.on("message", message => {
    //users = message.guild.roles.cache.get("714223668288552961").members.map(m=>m.user.tag);
    //var i;
    //for (i=0;i<users.length;i++){
        //let docRef = db.collection('users').doc(users[i]);

        //let setAda = docRef.set({
           //name: users[i].toString(),
           //healthPoints: 100,
           //XP: 0,
           //equippedWeapon: 'default-fist',
           //inventory: []
        //});
    //}
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'attack'){
        //if the user does not define a user to attack send a warning message
        //if the defined user is not in the database, warn the user
        //if the user sends a valid command, pull their equipped weapon, select a random accuracy, and deduct health from the other player
        //if either party reaches a health level of zero, send s message and wipe out their experience
        //send a summary of what has occured
        if (args.length === 0){
            message.channel.send("You must specify a user for this command to work!");
        } else {
            var user = message.mentions.members.map(m=>m.user);
            var userTag = message.mentions.members.map(m=>m.user.tag);
            var checkedUser = checkUser(user.toString());
            if (checkedUser === false){
                message.channel.send("That user does not exist or does not have the war role!");
            } else {
                async function iHateWritingAllTheseFuckingAsyncFunctions(){
                    console.log(user.toString());
                    var weapon = await getWeapon(userTag.toString());
                    console.log('line 344:checkWeapon result:  ', weapon);
                    var inflictedDamage = await calculateAccuracy(weapon);
                    console.log('damage inflicted is: ',inflictedDamage);
                    message.channel.send("<@"+message.author +">"+ ' used ' + weapon + ' to attack ' +user);
                    inflictDamage(inflictedDamage, userTag.toString(), message.channel);
                }
                iHateWritingAllTheseFuckingAsyncFunctions();
            }
        }
    } else if (command === 'create-faction'){
        //if no parameter is given warn the user
        //create a new document in the factions collection
        if (args.length === 0){
            message.channel.send('Be sure to include your faction name!');
        } else {
            var user = message.member.user.tag;
            console.log('user is: ', user);
            let docRef = db.collection('factions').doc(args[0]).collection('members').doc(user);
            let docRefOne = db.collection('factions').doc(args[0])
            let setData = docRefOne.set({
              XP: 0
            });
            message.channel.send('Your faction: '+args+' has been created!');
        }
    } else if (command === 'join-faction'){
        //if no parameter is given warn the user
        //if the parameter does not exist in the database, warn the user
        //add the user to the requested faction
        if (args.length === 0){
          message.channel.send('You must specify a faction to join!');
        } else {
          const docRef = db.collection('factions').doc(args[0]);
          var user = message.author;
          docRef.get()
            .then((docSnapshot) => {
              if (docSnapshot.exists) {
                const docRefTwo = db.collection('factions').doc(args[0]).collection('members').doc(user.toString());
                let setData = docRefTwo.set({
                    name: user.toString(),
                });
                message.channel.send(user.toString() + ' has joined ' + args[0]);
              } else {
                message.channel.send('That faction does not exist!');
              }
            });
        }
    } else if (command === 'status'){
        //if no parameter is given pull all of the info from the user who sent the message
        //if a parameter is given that is not a tag, then warn the user
        //if a tag is included as a parameter that is not in the database, send a message
        //if a tag is included that is in the database, display that user's information
        if (args.length === 0){
          var user = message.member.user.tag;

          async function info(){
              var docRef = db.collection('users').doc(user.toString());
              var information = await docRef.get().then(doc => {
                  var obj = doc.data();
                  return obj;
              }).catch((e)=> { console.log('catch: ',e); });
              console.log('obj is', information);
              console.log('information: ', information);
              const userInfoEmbed = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle(user.toString() + ' info:')
                  .addFields(
                      { name: 'name', value: information.name },
                      { name: "XP", value: information.XP },
                      { name: "health", value: information.healthPoints },
                      { name: "equipped weapon", value: information.equippedWeapon },
                  );
              message.channel.send(userInfoEmbed);
          }
          info();
        } else {
          //var user;
          //if (message.mentions.members.first() === args[0]){
            console.log(message.mentions.users.first().tag);
            async function check() {
                var checkedUser = await checkUser(message.mentions.users.first().tag);
                console.log('user status: ',checkedUser);
                if (checkedUser === false){
                    message.channel.send('This user does not exist or does not have the war role!');
                } else {
                    async function infoOne() {
                        var docRef = db.collection('users').doc(message.mentions.users.first().tag);
                        var information = await docRef.get().then(doc => {
                            var obj = doc.data();
                            return obj;
                        }).catch((e) => {
                            console.log('catch: ', e);
                        });
                        const userInfoEmbed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle(message.mentions.users.first().tag + ' info:')
                            .addFields(
                                {name: 'name', value: information.name},
                                {name: 'XP', value: information.XP},
                                {name: 'health', value: information.healthPoints},
                                {name: 'equipped weapon', value: information.equippedWeapon},
                                {name: 'weapons', valeu: information.weapons},
                            );
                        message.channel.send(userInfoEmbed);
                    }
                    infoOne();
                }
            }
            check();
          //}
        }
    } else if (command === 'equip'){
        //if no parameter is included, warn the user
        //if a parameter is included, check that the weapon exists in the database
        //if the weapon does not exist in the database, warn the user
        //if the weapon exists in the database, but not in the user's inventory, warn the user
        //if the weapon exists in both the database, and user inventory, add the weapon to their equipped field
        if (args.length === 0){
          message.channel.send('You must specify the weapon you want to equip!');
        } else {
          async function e(){
              var exist = await checkWeaponExist(args[0]);
              var has = await checkHasWeapon(message.member.user.tag, args[0]);
              console.log('exist: ', exist);
              console.log('has: ',has);
              if (exist === false){
                  message.channel.send('This weapon does not exist!');
              } else if (exist === true && has === false){
                  message.channel.send('You do not own this weapon!');
              } else if (exist === true && has === true){
                  let docRef = db.collection('users').doc(message.author);
                  let setData = docRef.set({
                      equippedWeapon: args
                  });
              }
          }
          e();
        }
    } else if (command === 'help'){
      //display a page of commands and explanations
      const help = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Commands')
        .addFields(
          { name: '/attack (attackee)', value: 'attacks an oppenent using your equipped weapon' },
          { name: '/create-faction (faction name)', value: 'creates a team or something like that... it does nothing right now but I promise it will later' },
          { name: '/join-faction (faction name)', value: 'joins a faction so you can fight along side your comrades' },
          { name: '/status (user)', value: 'shows the information of any user passed as an argument, displays your information is passed with no argument' },
          { name: '/equip (weapon)', value: 'equips a weapon from your inventory' },
          { name: '/shop', value: 'sends a list of all available weapons and their cost in XP' },
          { name: '/buy (weapon)', value: 'purhcase a weapon from the shop' },
          { name: '/help', value: 'displays this embed with the list of commands, but you knew that already' },
        );
      message.channel.send(help);
    } else if (command === 'shop'){
      //display a list of weapons and their prices
      const shopRanged = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Ranged Weapons')
        .addFields(
          { name: 'compound bow', value: 'damage score: cost: 32XP' },
          { name: 'hand crossbow', value: 'damage score: cost: 5XP' },
          { name: 'heavy crossbow', value: 'damage score: cost: 40XP' },
          { name: 'hunting bow', value: 'damage score: cost: 16XP' },
          { name: 'long bow', value: 'damage score: cost: 20XP' },
          { name: 'slingshot', value: 'damage score: cost: 2XP' },
        );
      const shopHeavy = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Heavy Weapons')
        .addFields(
          { name: 'axe', value: 'damage score: cost: 17XP' },
          { name: 'heavy axe', value: 'damage score: cost: 34XP' },
          { name: 'mace', value: 'damage score: cost: 69XP' },
          { name: 'sledge hammer', value: 'damage score: cost: 16XP' },
          { name: 'war hammer', value: 'damage score: cost: 32XP' },
        );
      const shopLight = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Light Weapons')
        .addFields(
          { name: 'brass knuckles', value: 'damage score: cost: 1XP' },
          { name: "butterfly knives", value: 'damage score: cost: 2XP' },
          { name: 'dagger', value: 'damage score: cost: 4XP' },
          { name: 'dirk', value: 'damage score: cost: 3XP' },
          { name: 'meat cleaver', value: 'damage score: cost: 7XP' },
          { name: 'sai', value: 'damage score: cost: 6XP' },
          { name: 'stiletto', value: 'damage score: cost: 5XP' },
        );
      const shopMagic = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Magic Weapons')
        .addFields(
          { name: 'focusing-stone', value: 'damage score: cost: 64XP' },
          { name: 'focusing-sword', value: 'damage score: cost: 100XP' },
          { name: 'spell book', value: 'damage score: cost: 50XP' },
          { name: 'staff', value: 'damage score: cost: 16XP' },
          { name: 'wand', value: 'damage score: cost: 32XP' },
        );
      const shopMedium = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Medium Weapons')
        .addFields(
          { name: 'arming sword', value: 'damage score: cost: 10XP' },
          { name: 'claymore', value: 'damage score: cost: 9XP' },
          { name: 'long sword', value: 'damage score: cost: 11XP' },
          { name: 'rapier', value: 'damage score: cost: 4XP' },
          { name: 'short sword', value: 'damage score: cost: 7XP' },
          { name: 'sword', value: 'damage score: cost: 8XP' },
        );
      message.channel.send(shopRanged);
      message.channel.send(shopMagic);
      message.channel.send(shopLight);
      message.channel.send(shopMedium);
      message.channel.send(shopHeavy);
    } else if (command === 'buy'){
      //warn the usee if the command is passed with no arguments
      //if the user passes an argument check that the weapon exists, if not warn the user
      //if the weapon exists, check if the user has enough XP to buy the weapon
      //warn the user if they do not have enough XP
      //if the user has enough XP and the weapon exists, add the weapon to their inventory and deduct the cost from their XP
      if (args.length === 0){
        message.channel.send('You must specify the item you want to buy!');
      } else {
        async function b(){
            var exists = await checkWeaponExist(args[0]);
            if (exists === true){
                async function c(){
                    var affordable = await checkPrice(args[0], message.member.user.tag);//returns an array with XP of the weapon and person [personXP, itemXP] or false
                    console.log('affordable variable is: ', affordable);
                    if (affordable === false){
                        message.channel.send('You do not have enough XP to buy that weapon');
                    } else {
                        addWeapon(affordable[0], affordable[1], message.member.user.tag, args[0]);
                    }
                }
                c();
            } else {
                message.channel.send('tha weapon does not exist');
            }
        }
        b();
      }
    } else {
        message.channel.send("that isn't a command");
    }
});


client.login(token);
