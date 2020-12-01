export const getDeleteModalTitle = (counterList = []) => {
    const selectedCounterList = counterList.filter( el => el.isSelected);
    if(selectedCounterList.length === 1) return `Delete the "${selectedCounterList[0].title}" counter?`;

    return `Delete ${selectedCounterList.length} counters?`;
}