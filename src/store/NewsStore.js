import { makeAutoObservable } from "mobx";

export default class NewsStore {
  constructor() {
    this._articles = []
    this._currentArticle = null
    this._sideBarArticles = []
    makeAutoObservable(this)
  }

  setArticles(articles) {
    this._articles = articles
  }

  setCurrentArticle(article) {
    this._currentArticle = article
  }

  setSideBarArticles(articles) {
    this._sideBarArticles = articles
  }

  get articles() {
    return this._articles 
  }

  get currentArticle() {
    return this._currentArticle
  }

  get sideBarArticles() {
    return this._sideBarArticles
  }
}