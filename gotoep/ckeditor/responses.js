function getBotResponse(input) {
    //rock paper scissors
    if (input == "fine") {
        return "what is  your name";
    } else if (input == "kishore") {
        return "hi  kishore, what program do you like to  learn";
    } 
    else if (input == "akash") {
        return "hi  akash, what program do you like to  learn";
    }
    else if (input == "java") {
        return "Java is a widely used object-oriented programming language<br> and software platform that runs on billions of devices, <br>including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages.";
    }
    else if (input == "c") {
        return "The C programming language is a general-purpose, operating system-agnostic, and procedural language that supports structured programming and provides low-level access to the system memory.";
    }
    else if (input == "python") {
        return "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected.";
    }
    else if (input == "Thank you") {
        return "Welcome";
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}