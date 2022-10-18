export const tablePopulate = (data) => {
    let len = data?.length;
    let size;
    size = len === 0 ? size = 5
        : len === 1 ? size = 4
            : len === 2 ? size = 3
                : len === 3 ? size = 2
                    : len === 4 ? size = 1
                        : size = 0;

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