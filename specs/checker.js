const expect = require("chai").expect;
const fetch = require("node-fetch");

describe("broken link test", () => {
  it("should check the page for broken links", () => {
    browser.url("./");
    const links = $$(".shop-benefits a");
    // expect(links.length).to.be.greaterThan(1);

    const urls = links.map((link) => link.getAttribute("href"));

    const requests = urls.map((url) => browser.call(() => fetch(url))); //urls.map((url) => fetch(url));

    // const responses = urls.map((url) => browser.call(() => fetch(url))); //await Promise.all(requests);

    // const statusCodes = responses.map((response) => response.status);

    // statusCodes.forEach((statusCode) => {
    //   expect(statusCode).to.be.below(400);
    // });

    // browser.url("./");
    // const links = $$(".shop-benefits a");
    // // expect(links.length).to.be.greaterThan(1);
    // const urls = links.map((link) => link.getAttribute("href"));
    // const requests = urls.map((url) => browser.call(() => fetch(url)));
    // requests.forEach((resonse) => {
    //   if (resonse.status === 404) {
    //     console.log(`404 Link text is : ${resonse.text}`);
    //   }
    //   console.log(`Link text is : ${resonse.text}`);
    // });
    // // expect(links[0].isDisplayed()).toBe(true);
    // console.log(`The links length is ${links.length}`);
    // console.log(`The page title is ${browser.getTitle()}`);
  });
});

// const links = $$("a");
// // get all the links on the page
// const urls = links.map((link) => link.getAttribute("href"));
// const requests = urls.map((url) => browser.call(() => fetch(url)));
// const statusCodes = requests.map((response) => response.status);
// console.log(statusCodes);
// statusCodes.forEach(async (statusCode) => {
//   expect(statusCode).not.toBe(404);
// });
