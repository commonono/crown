const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('game', 'game', []);
  }

  async run(client, message, args) {
    message.channel.send({
      "embed": 
        {
          "color": 16755200,
          "author": {
          },
          "title": "Games", 
          "description": "    **Phasmophobia**   \n    **Rocket League**    \n     **Rainbow Six Siege**   \n   **Minecraft**     \n     **In Silence**     \n      **Black Squad**     \n       **Call of Duty: Cold War / WARZONE**     \n     ═════════•°• :warning: •°•═════════      \n **NOTE**: Feel free to suggest features for me!        \n          ═════════•°• :warning: •°•═════════"
        }
    });
  }
}