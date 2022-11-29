export function log(string: string) {
    console.log(string);
}

export default class Tester {
    private readonly _value: string;
    static SELF = new Tester('my SELF');

    constructor(value: string) {
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }
}