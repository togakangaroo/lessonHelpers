Head over to a web page eg. [https://sherwin-williams.com](https://sherwin-williams.com). Open the console, then run the following.

     fetch('https://raw.githubusercontent.com/togakangaroo/lessonHelpers/master/javascript/tulaneJsUiLesson.js').then(x => x.text()).then(eval)
