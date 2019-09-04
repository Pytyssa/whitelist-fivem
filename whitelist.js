
//Aqui é o requeirimento das "extenções"

const Discord = require('discord.js'); 

//Criando o "bot", e colocar ele quando for criar um Infinite.on("message", message => {}), etc etc
const Infinite = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 4048,
    fetchAllMembers: false,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    disableEveryone: false
});

//Aqui quando o bot estiver online vai registrar no console as seguintes informações abaixos!
Infinite.on("ready", () => {
  console.log(`Infinite\nServidores:${Infinite.guilds.size}\nUsuários:${Infinite.users.size}\nEmojis:${Infinite.emojis.size}`);
});

let prefix = "in." //prefix do seu bot

Infinite.on("message", message => {

    if(message.content.startsWith(prefix + 'aprovar')) { //nome do comando pode ser trocado para o q vc quiser
        const mysql = require('mysql'); 
        //Entrando na mysql
        const connection = mysql.createConnection({ //Info da database, para conectar
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'fxserver'
        });
        connection.connect((err) => {
        });
        if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.channel.send({ //Só é liberado o comando caso a pessoa tenha a permissão de banir
            embed:{title: 'Você não tem permissão para usar este comando!',color: 0xFFFF00}
          })
    
const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const sayMessage = args.slice(1).join(" ");

          setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
      
        
            connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${sayMessage}'`, (err, rows) => { //aqui vai ta atualizando a whitelist do servidor
    
            message.reply(`**o id ${sayMessage} foi ativado**`) //Falando q o id foi ativado
    
            var usuario = new Discord.RichEmbed()
            .setTitle("Infinite | Aprovar ")
            .setDescription(`O id **${sayMessage}** foi aprovado na **whitelist** com sucesso\n pelo staff **${message.author.username}!**`)
            .setColor(0xFFFF00)
            .setTimestamp(new Date())
            .setThumbnail('http://queropassaremconcursos.com.br/wp-content/uploads/2016/07/aprovado-concurso-TJ-MG.png')
                Infinite.guilds.get('IDDAGUILDA').channels.get('IDDOCANAL').send(usuario); //Aqui vamos pegar o id do servidor/canal
          })
      
    }
    })

Infinite.on("message", message => {

if(message.channel.type == "dm") return 
})

Infinite.login("SEUTOKENAQUI"); //Token do seu bot, que pegamos lá atraz`