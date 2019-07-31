import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Word relay</h1>
<div>
only Javascript, without HTML
</div>
`;

var Body = document.body;
var Word = document.createElement("div");
Word.textContent = "Apple";
document.body.append(Word);
var Form = document.createElement("form");
document.body.append(Form);

var InputTag = document.createElement("input");
Form.append(InputTag);

var Button = document.createElement("button");
Form.append(Button);
Button.textContent = "Enter!";

var Result = document.createElement("div");
document.body.append(Result);

Button.addEventListener("submit", function CallbackFunction(e) {
  e.preventDefault();
  if (Word.textContent[Word.textContent.length - 1] === InputTag.value[0]) {
    Result.textContent = "Right";
    Word.textContent = InputTag.value;
    InputTag.value = "";
    InputTag.focus();
  } else {
    Result.textContent = "Fail";
    InputTag.value = "";
    InputTag.focus();
  }
});
