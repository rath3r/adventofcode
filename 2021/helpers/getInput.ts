export function getInput(data: string) {
    let dataArr = data.split("\n");
    let retArr = new Array;

    dataArr.forEach((el) => {
        retArr.push(el);
    });

    return retArr;
}
