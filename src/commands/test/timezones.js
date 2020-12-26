const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('timezones', 'timezone', []);
  }

  async run(client, message, args) {
    message.channel.send({
      "embed": 
        {
          "color": 16755200,
          "author": {
          },
          "title": "Timezones", 
          "description": "    **Ryan** / armaneye - **GMT**   \n    **Kyle** / KillSwitch- **GMT**    \n     **Mason** / Arctic - **GMT**   \n     ═════════•°• :warning: •°•═════════      \n **NOTE**: Feel free to suggest features for me!        \n          ═════════•°• :warning: •°•═════════"
        }
    });
  }
}