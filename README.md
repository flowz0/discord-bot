# discord-bot
A simple Discord bot
## Features
- Basic commands
- Advanced commands (WIP)
### Run locally
1. Install packages by opening the terminal in the project directory and entering `npm install`
2. Run the Node.js server using `node index.js` or `node .`
3. To deploy commands run `node deploy-commands.js` (globally or by guild)
   - Deploy commands for specified guild `.applicationGuildCommands()`
   - Deploy commands to all guilds the bot is in `.applicationCommands()`
