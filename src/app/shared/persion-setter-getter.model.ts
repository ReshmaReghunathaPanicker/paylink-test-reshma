export class PersonGetterSetter {
    private _age: number;
    
    /* setter for age */
    public get age() {
        if (!this._age) {
            throw new Error("No age has been set");
        }
        return this._age;
    }

    /* getter for age */
    public set age(theAge: number) {
        /* throw exception on invalid age */
        if (theAge <= 0 || theAge >= 130 || isNaN(theAge)) {
            throw new Error('Invalid age');
        }
        this._age = theAge;
    }

}