"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveFile {
    constructor() {
        /**
         * DI - Dependency Injection can be implemented here
         */
    }
    execute({ fileContent, fileDestination = 'outputs', fileName = 'table' }) {
        try {
            fs_1.default.mkdirSync(fileDestination, { recursive: true });
            fs_1.default.writeFileSync(`./${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        }
        catch (error) {
            console.error('Error creating file:', error);
            return false;
        }
    }
}
exports.SaveFile = SaveFile;
