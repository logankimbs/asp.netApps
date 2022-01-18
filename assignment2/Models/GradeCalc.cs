using System;
using System.ComponentModel.DataAnnotations;

namespace assignment2.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100")]
        public int assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100")]
        public int groupProjects { get; set; }

        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100")]
        public int quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100")]
        public int exams { get; set; }

        [Range(0, 100, ErrorMessage = "Must be a number between 0 and 100")]
        public int intex { get; set; }
    }
}
