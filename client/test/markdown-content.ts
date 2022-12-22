import { loremIpsum } from "lorem-ipsum";

const mdSample1 = (user) =>
    `# Hello, ${user}\nThis is your customised page. ` +
    loremIpsum({ count: 10 }) +
    `\n ## Subtitle \n` +
    loremIpsum({ count: 10 }) +
    `\n ## Another Subtitle \n` +
    loremIpsum({ count: 10 });

export { mdSample1 };
