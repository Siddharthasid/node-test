const add = (a, b) => {
    return a+b;
}

const err = () => {
    throw new Error('I am a new error');
}

const promiseTest = (a,b) => {
    return new Promise((resolve, reject) => {
        if(a-b > 0){
            resolve("+ve");
        }else{
            reject("-ve");
        }
    });
}

const arrTest = () => {
    const arr = ['bat', 'cat', 'mat'];
    return arr;
}

module.exports = {
    add,
    err,
    promiseTest,
    arrTest
}