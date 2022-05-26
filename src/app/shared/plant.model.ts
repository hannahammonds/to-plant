export class Plant {
  constructor(
    public seed_name: string,
    public amount: number,
    public weeks_to_mature: number,
    public growing_season: string,
    public when_planted: Date,
    public has_been_planted?: boolean,

) {}
}
