/* origin
{
	"_id" : ObjectId("5912bafad16bcf6f1de94026"),
	"part_title" : "Javascript Basic of Basic",
	"quiz" : [
		{
			"quiz_title" : "First Step",
			"quiz_content" : "quiz1.md",
			"problems" : "problem1.json"
		},
		{
			"quiz_title" : "Variable",
			"quiz_content" : "quiz2.md",
			"problems" : "problem2.json"
		}
	]
}
*/

db.parts.drop();
db.parts.insert(
	[
		{
			"part_title": "TESTING",
			"quiz": [{
					"quiz_title": "FUNCTION TEST",
					"quiz_content": "test.md",
					"problems": "test.json"
				}
			]
		},
		{
			"part_title": "Javascript Basic of Basic",
			"quiz": [
				{
					"quiz_title": "First Step",
					"quiz_content": "first_step.md",
					"problems": "first_step.json"
				},
				{
					"quiz_title": "Variable",
					"quiz_content": "variable.md",
					"problems": "variable.json"
				},
				{
					"quiz_title": "Operator",
					"quiz_content": "operator.md",
					"problems": "operator.json"
				}				
			]
		}
	]
);