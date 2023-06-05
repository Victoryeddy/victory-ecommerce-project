export function getFormattedAmount(amount) {
    return new Intl.NumberFormat('en-US').format(amount);
}

export function  getFormattedDate(date){
    var options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    const theDate = new Date(date);

    var formattedDate = theDate.toLocaleDateString("en-US", options);

    return formattedDate;
};

// export default getFormattedAmount;