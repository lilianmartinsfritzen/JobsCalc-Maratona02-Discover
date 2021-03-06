module.exports = {
  remainingDays(job) {
    // ccalculation of remaining time
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDays);
    const dueDateInMs = createdDate.setDate(dueDay);

    const timeDiffInMs = dueDateInMs - Date.now(); // timeDiffInMs -> diferença do tempo em milissegundos
    // turn milliseconds into days
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs);

    // X days left
    return dayDiff;
  },

  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
};
