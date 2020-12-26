const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('crownhelp', 'helping', []);
  }

  async run(client, message, args) {
    message.channel.send({
      "embed": 
        {
          "color": 16755200,
          "author": {
          },
          "title": "Commands",
          "description": " \n   **-commands** - **displays command menu**   \n     **-timezones** - **display friends timezones** (message ryan to add you)   \n ═════════•°• :warning: •°•═════════ \n   **ADMIN COMMANDS**  \n   **-clearchat** - **clears the channel in which the command is sent**   \n   **-ban** - **bans mentioned username**   \n   **-kick** - **kicks mentioned username**"
        }
    });
  }
}