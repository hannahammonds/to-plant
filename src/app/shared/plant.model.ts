export class Plant {
  constructor(
    public seedname: string,
    public amount: number,
    public weeks: number,
    public season: string,
    public planted?: boolean
) {}
}
