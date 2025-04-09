import { login } from "/cypress/support/shared";
import { getRandomNumber } from "/cypress/support/utils";
import { faker } from "@faker-js/faker";

function waitForArticlesList() {
  cy.get("article-list").as("articlesList").should("be.visible");
}

function openGlobalFeed() {
  cy.get(".nav-tabs > div:nth-child(2) a").should("have.class", "active");
}

function openRandomArticle() {
  waitForArticlesList();

  const rand = getRandomNumber(0, 5);
  cy.get("@articlesList")
    .find("article-preview")
    .should("have.length", 6)
    .eq(rand)
    .as("randomArticle")
    .click();
}

function generateFakeComment() {
  return {
    body: faker.lorem.paragraph(),
  };
}

function addComment() {
  const comment = generateFakeComment();

  cy.get("@articlePage")
    .find("form.comment-form")
    .as("addCommentForm")
    .should("be.visible");

  cy.get("@addCommentForm").within(() => {
    cy.get("textarea[ng-model$=body]").type(comment.body);
    cy.get("button[type=submit]").click();
  });

  return comment;
}

describe("Commenting", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "/");

    cy.get(".navbar").should("be.visible").as("appHeader");
    login();
  });

  it("should do add comment", () => {
    openRandomArticle();

    cy.get(".mx-auto").as("articlePage");

    const comment = addComment();

    cy.get("@articlePage").contains(comment.body).should("be.visible");
  });

  it.only("should do delete comment", () => {
    openGlobalFeed();
    openRandomArticle();

    cy.get(".mx-auto").as("articlePage");

    const comment = addComment();
    cy.get("@articlePage")
      .contains(comment.body)
      .as("commentForDelete")
      .closest(".card")
      .find("[data-testid=DeleteIcon]")
      .click();

    cy.get("@commentForDelete").should("not.exist");
  });
});
