// Bar chart
new Chart(document.getElementById("line-chart"), {
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
      text: "Predicted world population (millions) in 2050",
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
