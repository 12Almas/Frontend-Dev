class FitnessAnalytics {
    constructor(data) {
        this.data = data;
    }

    getActiveUsers() {
        if (this.data.length === 0) throw new Error("Dataset is empty");
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        if (this.data.length === 0) throw new Error("Dataset is empty");
        const totalCalories = this.data.reduce((sum, user) => sum + user.calories, 0);
        return totalCalories / this.data.length;
    }

    getUserSummary() {
        if (this.data.length === 0) throw new Error("Dataset is empty");
        return this.data.map(user => `${user.user} burned ${user.calories} calories.`);
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(workoutData);
    console.log("Active Users:", analytics.getActiveUsers());
    console.log("Average Calories:", analytics.getAverageCalories());
    console.log("Summary:", analytics.getUserSummary());
} catch (error) {
    console.log(error.message);
}