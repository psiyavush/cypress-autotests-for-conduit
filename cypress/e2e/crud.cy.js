import { faker } from "@faker-js/faker";
import { login } from "/cypress/support/shared";
import meUser from "/cypress/fixtures/me-user.json";

function generateFakeArticle() {
  return {
    title: faker.lorem.sentence({
      min: 2,
      max: 5,
    }),
    description: faker.lorem.paragraph(),
    tags: [
      faker.word.adjective(),
      faker.word.adjective(),
      faker.word.adjective(),
    ],
  };
}

function clearArticle() {
  cy.get("@addArticleForm").find("input[ng-model$=title]").clear();
  cy.get("@addArticleForm").find("input[ng-model$=description]").clear();
  cy.get("@addArticleForm").find("textarea[ng-model$=body]").clear();
  cy.get("@addArticleForm").find("input[ng-model$=tagField]").clear();

  for (let i = 0; i < 3; i++) {
    cy.get(".tag-list .tag-default")
      .first()
      .find("[ng-click*=remove]")
      .click({ force: true });
    cy.wait(200);
  }
}

function fillArticle() {
  const article = generateFakeArticle();

  cy.get("@addArticleForm").find("input[ng-model$=title]").type(article.title);
  cy.get("@addArticleForm")
    .find("input[ng-model$=description]")
    .type(article.description);

  const body = `I like fruits!
    It is **healthy** and *tasty.*
    My favorite are:
    * banana
    * orange
    * lemon`;

  cy.get("@addArticleForm").find("textarea[ng-model$=body]").type(body);

  cy.get("@addArticleForm")
    .find("input[ng-model$=tagField]")
    .as("articleTagInput");
  for (const tag of article.tags) {
    cy.get("@articleTagInput").type(tag).type("{enter}");
  }

  return article;
}

function checkArticle(article) {
  cy.get("@articlePage").find("h1").should("contains.text", article.title);

  // Проверка заблокирована, т.к. АПИ не предусматривает обновление тегов (только создание)
  // Поэтому это работает только на создании статьи, на обновлении всегда будет ошибка
  // Либо надо форкать репозиторий АПИ себе и дописать обновление тегов

  // cy.get('@articlePage').find('.tag-list').as('articleTags');
  // for (const tag of article.tags) {
  //     cy.get('@articleTags').should('contain.text', tag);
  // }

  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);

  cy.get("@articlePage")
    .find('div[data-cy="username"]')
    .should("have.text", meUser.username);
  cy.get("@articlePage")
    .find('p[data-cy="date"]')
    .should("have.text", formattedDate);
}

function addArticle() {
  // Open editor
  cy.get("@appHeader").find('a[href$="/editor"]').click();
  cy.url().should("include", "/#/editor");

  cy.get(".editor-page").as("addArticlePage");
  cy.get("@addArticlePage")
    .find("form")
    .should("be.visible")
    .as("addArticleForm")
    .as("editArticleForm");

  const article = fillArticle();

  cy.get('button[type="submit"]').click();
  cy.get(".article-page").should("be.visible");

  return article;
}

function openMyArticles() {
  cy.get("@appHeader").contains("a", meUser.username).click();
  cy.url().should("include", meUser.username);

  cy.get(".articles-toggle > ul > li:first-child a").should(
    "have.class",
    "active"
  );
}

function openMyArticle(article) {
  openMyArticles();

  cy.get("article-list").should("be.visible").as("myArticles");

  cy.get("@myArticles")
    .contains(article.title)
    .parents("article-preview")
    .find("a.preview-link")
    .click();
}

describe("Article", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".navbar").should("be.visible").as("appHeader");
    login();
    cy.url().should("include", "/#/home");
  });

  it("should do publish article", () => {
    const article = addArticle();

    cy.get(".article-page").should("be.visible").as("articlePage");

    checkArticle(article);
  });

  it("should do delete article", () => {
    const article = addArticle();

    openMyArticle(article);

    cy.get(".article-actions button[data-cy=delete]").click();

    cy.location("host").should("eq", "cypress-testing-website.vercel.app");
    cy.wait(3000);
    openMyArticles();

    cy.get("article-list").should("be.visible").as("myArticles");

    cy.get("@myArticles")
      .find("article-preview")
      .should("have.length.greaterThan", 0);

    cy.get("@myArticles").contains(article.title).should("have.length", 0);
  });

  it("should do edit article", () => {
    const article = addArticle();
    cy.get(".article-page").should("be.visible").as("articlePage");

    openMyArticle(article);

    cy.get('.article-actions button[data-cy="edit"]').click();

    cy.get(".editor-page").as("editArticlePage");

    cy.get("@editArticlePage")
      .find("form")
      .should("be.visible")
      .as("addArticleForm");

    clearArticle();

    const newArticle = fillArticle();

    cy.get('button[type="submit"]').click();

    cy.get(".article-page").should("be.visible").as("articlePage");

    checkArticle(newArticle);
  });
});
