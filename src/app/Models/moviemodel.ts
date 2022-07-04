export class Movie {
  id: number;
  name: string;
  earning: number;
  releaseDate: Date;

  constructor(
    id?: number,
    name?: string,
    earning?: number,
    releaseDate?: Date
  ) {
    this.id = id || 0;
    this.name = name || '';
    this.earning = earning || 0;
    this.releaseDate = releaseDate || new Date();
  }
}
