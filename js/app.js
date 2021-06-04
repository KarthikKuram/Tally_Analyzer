// Line Chart for Sales Dash Card
new Chart(document.getElementById("line-chart-dash"), {
  type: "line",
  data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        data: [2478, 5267, 734, 784, 433],
        // data: [0, 0, 0, 0, 0],
        borderColor: "#014f86",
        fill: true,
        backgroundColor: "white",
        lineTension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  },
  options: {
    repsonsive: true,
    title: {
      display: false,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
      },
      y: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
      },
    },
  },
});

// Bar chart for Expenses Dash Card
new Chart(document.getElementById("bar-chart-dash"), {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [1478, 2267, 734, 784, 433],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: false,
    },
    plugins: { legend: false },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
      },
      y: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false },
      },
    },
    borderRadius: 4,
    barThickness: 3,
  },
});

// Donutchart for Expense Dash Card

new Chart(document.getElementById("donut-chart-dash"), {
  type: "doughnut",
  data: {
    labels: ["Party-1", "Party-2", "Party-3", "Party-4", "Party-5"],
    datasets: [
      {
        data: [47, 19, 71, 51, 22],
        backgroundColor: [
          "rgba(216, 17, 89, 0.5)",
          "rgba(143, 45, 86, 0.5)",
          "rgba(33, 131, 128, 0.5)",
          "rgba(251, 177, 60, 0.5)",
          "rgba(115, 210, 222, 0.5)",
        ],
        borderWidth: 2,
      },
      {
        data: [25, 25, 25, 20, 22],
        backgroundColor: [
          "rgba(255, 166, 158, 1)",
          "rgba(94, 100, 114, 1)",
          "rgba(250, 243, 221, 1)",
          "rgba(184, 242, 230, 1)",
          "rgba(174, 217, 224, 1)",
        ],
        borderColor: "rgba(37, 9, 2, 0.2)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
    borderAlign: "inner",
    cutout: 20,
    radius: 50,
  },
});

// line chart
new Chart(document.getElementById("line-charts"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Total Sales (Lakhs)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [2478, 5267, 734, 784, 433],
        // fill=true,
        borderColor: "#3e95cd",
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
    },
  },
});

// Bar chart
new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Total Expenses (Lakhs)",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [1478, 2267, 734, 784, 433],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Predicted world population (millions) in 2050",
    },
  },
});

$(document).ready(function () {
  $("#example").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: true,
  });
});
