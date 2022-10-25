export const tablePopulate = (data) => {
    let len = data?.length;
    let size;

    if (len === 0) {
        size = 5;
    } else if (len === 1) {
        size = 4;
    } else if (len === 2) {
        size = 3;
    } else if (len === 3) {
        size = 2;
    } else if (len === 4) {
        size = 1;
    } else {
        size = 0;
    }

    let filteredData = [];

    for (let i = 0; i < len + size; i++) {
        filteredData.push(data[i]);
    }

    return filteredData;
};

export const validateEmail = (email) => {
    let atPosition = email.indexOf("@");
    let dotPosition = email.lastIndexOf(".");

    if (atPosition < 1 || dotPosition - atPosition < 2) {
        return true;
    };
};