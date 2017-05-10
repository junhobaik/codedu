# MongoDB

```json

db.parts.insert(
    {
      "part_title" : "Javascript Basic of Basic",
      "quiz" : [
        {
          "quiz_title" : "First Step",
          "quiz_content" : "first_step.md",
          "problems" : [
            "pro1.md",
            "pro2.md",
            "pro3.md",
            "pro4.md",
            "pro5.md"
          ]
        },
        {
          "quiz_title" : "Variable",
          "quiz_content" : "variable.md",
          "problems" : [
            "pro1.md",
            "pro2.md",
            "pro3.md",
            "pro4.md",
            "pro5.md"
          ]
        }
      ]
    }
);

```