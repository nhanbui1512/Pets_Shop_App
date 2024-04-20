const scripQuestions = {
  autoBot: "Tìm kiếm bằng hình ảnh ?",
  answerOptions: [
    {
      answersValue: "Tìm kiếm ngay!",
      childrens: {
        autoBot: "Great, what would you like to do first?",
        answerOptions: [
          {
            answersValue: "see latest job openings",
            childrens: {
              autoBot:
                "Search from millions of open jobs on LinkedIn. To narrow in on the right openings, apply search filters to see jobs that match your interests and experience. To get started, type in the role you are interested in; then, filter by different criteria like these (and others): - Companies - Locations (including remote) - Salary ranges - Benefits - Under 10 applicants",
              answerOptions: [
                {
                  answersValue: "Get started",
                  childrens: {
                    autoBot:
                      "Here are 2 things you can do today to make it easier for recruiters to find you when they are searching for candidates:",
                    answerOptions: [
                      {
                        answersValue: "Add your job preferences",
                        childrens: {
                          autoBot: "ok, i'll remember ",
                          answerOptions: [],
                        },
                      },
                      {
                        answersValue: "Add your job preferences",
                        childrens: {
                          autoBot: "ok, i'll remember ",
                          answerOptions: [],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            answersValue: "Help recruiters find me",
          },
        ],
      },
    },
    {
      answersValue: "Không phải bây giờ",
      childrens: {
        autoBot: "Cảm ơn, bạn có thể chat trực tiếp với shop để được hỗ trợ",
        answerOptions: [],
      },
    },
  ],
};

export default scripQuestions;
