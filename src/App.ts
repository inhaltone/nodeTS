import Tester, {log} from "./helpers/Utilities";

const runThis = (params: string) => {
    log(params);
    return `with params => ${params}`;
}

const params = runThis('test');
const classTest = new Tester('i am a string');
console.log(params);
console.log(classTest.value);