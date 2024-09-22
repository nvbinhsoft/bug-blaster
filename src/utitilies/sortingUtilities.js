export const sortTickets = (tickets, sortPreference) => {
    if (sortPreference === "High to Low") {
        return tickets.sort((a, b) => b.priority.localeCompare(a.priority));
    } else if (sortPreference === "Low to High") {
        return tickets.sort((a, b) => a.priority.localeCompare(b.priority));
    } else {
        return tickets;
    }
}