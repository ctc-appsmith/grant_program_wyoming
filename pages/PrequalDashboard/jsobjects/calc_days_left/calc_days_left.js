export default {
	calculateDaysLeft: () => {
		const currentDate = new Date();
        const targetDate = new Date("2024-04-30");
        const millisecondsPerDay = 1000 * 60 * 60 * 24;

        return Math.ceil((targetDate - currentDate) / millisecondsPerDay);
    }
};
