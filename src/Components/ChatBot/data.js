const scripQuestions = {
  answerOptions: [
    {
      answersValue: "Tìm kiếm ngay!",
      childrens: {
        autoBot: "Bắt đầu thôi, bạn muốn dự đoán bằng cách nào",
        answerOptions: [
          {
            answersValue: "Tải ảnh từ máy của bạn",
            onClick(inputRef) {
              inputRef.current.click();
            },
          },
          {
            answersValue: "Gửi liên kết ảnh",
            openDialog() {},
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
