$("#calcGrade").click(function () {
    let assingments = $("#assignments").val() * 0.55;
    let groupProjects = $("#groupProjects").val() * 0.05;
    let quizzes = $("#quizzes").val() * 0.10;
    let exams = $("#exams").val() * 0.20;
    let intex = $("#intex").val() * 0.10;
    let total = assingments + groupProjects + quizzes + exams + intex;
    let results = Math.floor(total);

    if (results >= 94) {
        letterGrade = 'A';
    } else if (results < 94 && results >= 90) {
        letterGrade = 'A-';
    } else if (results < 90 && results >= 87) {
        letterGrade = 'B+';
    } else if (results < 87 && results >= 84) {
        letterGrade = 'B';
    } else if (results < 84 && results >= 80) {
        letterGrade = 'B-';
    } else if (results < 80 && results >= 77) {
        letterGrade = 'C+';
    } else if (results < 77 && results >= 74) {
        letterGrade = 'C';
    } else if (results < 74 && results >= 70) {
        letterGrade = 'C-';
    } else if (results < 70 && results >= 67) {
        letterGrade = 'D+';
    } else if (results < 67 && results >= 64) {
        letterGrade = 'D-';
    } else {
        letterGrade = 'E';
    }

    $("#demo").html(`Your grade is a ${results}% (${letterGrade})`);
});