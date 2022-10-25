export class History {

  constructor(private url: string, private date: Date) {
  }

  getUrl(): string {
    return this.url;
  }

  getDate(): Date {
    return this.date;
  }

}
