// https://www.devextent.com/import-es-modules-in-nodejs-with-typescript-and-babel/
import Tester, {log} from "./helpers/Utilities";

const runThis = (params: string) => {
    log(params);
    return `with params => ${params}`;
}

const params = runThis('test');
const classTest = new Tester('i am a string');
console.log(params, 'trelane me kano alagges');
console.log(classTest.value);