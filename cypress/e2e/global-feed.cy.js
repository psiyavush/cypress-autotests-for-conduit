import { login } from "/cypress/support/shared";
import { getRandomNumber } from "/cypress/support/utils";

function selectRandomArticle() {
  const rand = getRandomNumber(0, 5);
  cy.get("@articlesList")
    .find("article-preview")
    .should("have.length", 6)
    .eq(rand)
    .as("randomArticle");
}

describe("Articles", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.location("host").should("eq", "cypress-testing-website.vercel.app");
    cy.get(".navbar").should("be.visible").as("appHeader");
  });

  describe("Global articles feed", () => {
    beforeEach(() => {
      cy.get("article-list").as("articlesList");
    });

    it("should do display article list", () => {
      cy.get("@articlesList")
        .find("article-preview")
        .should("have.length", 6)
        .each((article) => {
          cy.wrap(article).within(() => {
            cy.get(".article-meta").within(() => {
              cy.get(".date").should("be.visible");
              cy.get("a[href*=profile] img").should("be.visible");
              cy.get(".author").should("be.visible");
              cy.get(".favorite-btn")
                .invoke("text")
                .invoke("trim")
                .should("match", /^[0-9]+$/);
            });
            cy.get("h3").should("be.visible");
            cy.get("[ng-bind=description]").should("be.visible");
            cy.get(".tag-list").should("have.length.greaterThan", 0);
          });
        });
    });

    it("should do open article detail page", () => {
      cy.get(".nav-tabs > div:nth-child(1) a").should("have.class", "active");

      selectRandomArticle();

      cy.get("@randomArticle")
        .find("h3")
        .invoke("text")
        .invoke("trim")
        .then((title) => {
          cy.wrap(title).as("randomArticleTitle");
        });

      cy.get("@randomArticle").find("a.preview-link").click();

      cy.location("hash").should("contain", "#/articles/");

      cy.get("@randomArticleTitle").then((title) => {
        cy.get(".article-page h1")
          .invoke("text")
          .invoke("trim")
          .should("eq", title);
      });
    });

    it("should do like article", () => {
      login();

      cy.location("hash").should("eq", "#/home");

      cy.get(".nav-tabs > div:nth-child(2) a").should("have.class", "active");

      selectRandomArticle();

      cy.get("@randomArticle").find(".favorite-btn").as("likeButton");

      cy.get("@likeButton")
        .invoke("text")
        .invoke("trim")
        .then((likes) => parseInt(likes))
        .as("likesBefore");

      cy.get("@likeButton")
        .invoke("hasClass", "btn-success")
        .then((likedBefore) => {
          cy.get("@likeButton").click().should("not.have.class", "disabled");

          cy.get("@likesBefore").then((likesBefore) => {
            const expectingLikes = likesBefore + (likedBefore ? -1 : 1);
            cy.get("@likeButton")
              .invoke("text")
              .invoke("trim")
              .then((likes) => parseInt(likes))
              .should("eq", expectingLikes);
          });
        });
    });

    it("should do navigate in list by paging", () => {
      cy.get("ul.pagination li")
        .should("have.length.greaterThan", 5)
        .as("availablePages")
        .eq(1)
        .should("have.class", "active");

      selectRandomArticle();

      cy.get("@randomArticle")
        .find("h3")
        .invoke("text")
        .invoke("trim")
        .then((title) => {
          cy.wrap(title).as("randomArticleTitle");
        });

      cy.get("@availablePages").eq(2).find("button").click();

      cy.get("@availablePages").eq(2).should("have.class", "active");

      cy.get("@randomArticleTitle").then((title) => {
        cy.get("article-list").should("not.contains.text", title);
      });

      cy.get("@availablePages").eq(0).find("button").click();

      cy.get("@availablePages").eq(0).should("have.class", "disabled");

      cy.get("@randomArticleTitle").then((title) => {
        cy.get("@articlesList").should("contains.text", title);
      });
    });

    it("should do filter articles by tag", () => {
      cy.get(".sidebar .tag-list .tag-default")
        .as("availableTags")
        .should("have.length.greaterThan", 10);

      const rand = getRandomNumber(0, 10);

      cy.get("@availableTags")
        .eq(rand)
        .click()
        .invoke("text")
        .invoke("trim")
        .as("randomTagName");

      cy.get("@randomTagName").then((tagName) => {
        cy.get(".nav-tabs > div:nth-child(2) a")
          .should("be.visible")
          .should("contain.text", tagName)
          .should("have.class", "active")
          .then(() => {
            cy.get("@articlesList")
              .find("article-preview")
              .find(".tag-list .tag-default")
              .should("contain.text", tagName);

            cy.get("@articlesList")
              .find("article-preview")
              .each((article) => {
                cy.wrap(article)
                  .find(".tag-list .tag-default")
                  .filter((i, el) => el.innerText.trim() === tagName)
                  .should("have.length", 1);
              });
          });
      });
    });
  });
});
