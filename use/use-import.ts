export interface SourceApi {
  name: string
  url: string
  apiKey: string
}
export class ImportArticle {
  source: SourceApi
  constructor(source: SourceApi) {
    this.source = source
  }
  importItem(a: string) {}
  isExist(v: string) {}
  translate(a: string) {}
  save(){}
}
