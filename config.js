/**
   * Create By Dika Ardnt.
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	SatganzDevs: 'https://api-SatganzDevsbotz.herokuapp.com',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'mmc',
}

// Other
global.owner = ['6281316701742','6281268248904']
global.ownernomer = "6281316701742"
global.premium = ['0']
global.packname = '😝'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nKurniawan Satria'
global.sessionName = 'anjayanto'
global.prefa = ['','!','.','#','&']
global.namebotmu = 'Asistan'
global.tutorial = 'https://youtube.com'
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    verify: 'Daftar Dulu Kk, Cara Daftar nya Ketik .menu',
    owner: 'Fitur Khusus Owner Bot',
    api: 'Mungkin Api Nya Eror cok?',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '[❗] SEDANG DIPROSES',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.thumb = fs.readFileSync('./SatganzDevsMedia/SatganzDevs.png')
global.SatganzDevsbc = fs.readFileSync('./SatganzDevsMedia/SatganzDevsBc.png')
global.rules = fs.readFileSync('./SatganzDevsMedia/rules.jpg')
global.xc = fs.readFileSync('SatganzDevsMedia/SatganzDevsxc.jpg')
global.mygit = 'https://github.com/SatganzDevs'
global.myyt = 'https://bit.ly/SatganzDevs'
global.myytv = 'https://instagram.com/@satganzdevs.xyz'
global.botname = 'Asistan'
global.akulaku = 'SatganzDevs'
global.ytname = '@SatganzDevs'
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
