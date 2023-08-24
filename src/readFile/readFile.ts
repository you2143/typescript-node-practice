import fs from 'fs'

export class ReadFile {
    readText : string;
   
    constructor() {
        this.readText = fs.readFileSync("./tsconfig.json", 'utf-8');        
    }
}