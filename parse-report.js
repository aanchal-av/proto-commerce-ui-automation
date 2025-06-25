const fs = require('fs')

const reportUrl = 'https://aanchal-av.github.io/proto-commerce-ui-automation/index.html';

const message = `
🧪 *Cypress Test Summary*
📥 [Click to View HTML Report](${reportUrl})
`;

fs.writeFileSync("slack-message.txt", JSON.stringify({ text: message.trim() }, null, 2));