export class Questions
{
        id: string;
        number: string;
        type: string;
        level: string;
        Status: string;
        Category: string;

        constructor(id, number,type, level, Status, Category)
        {
            this.id = id;
            this.number = number;
            this.type = type;
            this.level = level;
            this.Status = Status;
            this.Category = Category;
        }
}
