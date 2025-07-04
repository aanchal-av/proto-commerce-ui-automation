const fs = require('fs')

const reportUrl = 'https://aanchal-av.github.io/proto-commerce-ui-automation/index.html';
const resultJson=JSON.parse(fs.readFileSync('cypress/reports/index.json'))

const message = `
🧪 *Cypress Test Summary*
📥 [Click to View HTML Report](${reportUrl})
🧮 Total Tests: ${resultJson.totalTests}
🥳 Passed Tests: ${resultJson.totalPassed}
🫠 Pending Tests: ${resultJson.totalPending}
😱 Failed Tests: ${resultJson.totalFailed}
`;

fs.writeFileSync("slack-message.txt", JSON.stringify({ text: message.trim() }, null, 2));