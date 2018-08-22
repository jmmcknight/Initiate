import { CharacterCondition } from "./character-condition";
import { CharacterType } from "../enums/character-type.enum";
import { Guid } from "./guid";

export class Character {

    constructor() {
        this.id = Guid.newGuid();
    }

    public id: string;
    public name: string;
    public initiative: number;
    public ac: number;
    public hp: number;
    public conditions: CharacterCondition[] = [];
    public isSelected: boolean;
    public characterType: CharacterType = CharacterType.Monster;

    populate(character: Character) {
        this.name = character.name;
        this.initiative = character.initiative;
        this.ac = character.ac;
        this.hp = character.hp;
        this.characterType = character.characterType;
        this.conditions = character.conditions;
        this.isSelected = false;
    }
}
