//var shuffleSequence = seq("setcounter","intro",sepWith("sep", rshuffle(startsWith("a"),startsWith("b"))))
//var shuffleSequence = seq("intro", "sst1", rshuffle("sst", "ssf", "ssu", "ext", "exf", "exu"));
//var randomCode = Math.random().toString(36).substr(2,9);
//var completionCode = String("QUANT-" + randomCode);
//var completionMessage = "Thank you for your participation. The results were successfully transmitted. Your participation code is: "+ completionCode;
var shuffleSequence =seq("setcounter","consent","intro","practice1","practice2","practice3","realexperiment",rshuffle(startsWith("quant")),"exit");
//var shuffleSequence =seq("setcounter",rshuffle(startsWith("quant")),"exit");
//var shuffleSequence = seq("practicea1","exit");
//var shuffleSequence = seq("practiceb1",rshuffle(startsWith("quant")));

//var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        countsForProgressBar: true,
        continueMessage: "Click here to continue."
    },
    "Vraag", {
        as: [["1", "1. Good"], ["0", "0. Not good"]],
        presentAsScale: true,
        showNumbers: false,
        //leftComment: "Good",
        //rightComment: "Not good",
    },
    "Zin", {
        hideProgressBar: true,
        mode: "self-paced reading",
        display: "in place",
        blankText: "(Press the space bar to continue.)",
   },
    "VraagX", {
      hideProgressBar: true
    },
    "Message", {
      hideProgressBar: true,
      transfer: "keypress"
    }
  ];

var Blanka=blank("_________________________________________________________________")
var annequestion1="<p>Anne: ____________________?</p>"
var taskquestion="<p><i>What do you think Anne's question was?</i></p>"
var items = [
    ["sep", "Separator", { }],
    ["consent", "Form", {consentRequired: true, html: { include: "intro.html" }, validators: {},continueMessage:"Click here to continue."} ],
    ["intro", "Form", {html: { include: "example_intro0.html" }, validators: {},continueMessage:"Click here to continue."} ],
    ["ainstructions", "Form", {html: { include: "example_intro1.html" },validators: {},continueMessage:"Click here to continue."} ],
    ["binstructions", "Form", {html: { include: "example_intro2.html" },validators: {} ,continueMessage:"Click here to continue."}],
     ["realexperiment", "Form", {html: { include: "example_intro3.html" },validators: {},continueMessage:"Click here to continue."} ],
    ["exit", "Form", {html: { include: "exit.html" },validators: {},continueMessage:"Click here to continue."} ],


["practicea1","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: There are more stars than moons.</p>"+ "<p><i>What do you think Anne's question was?</i> (Keep this question in mind because you’ll use it later!)</p>"+ Blanka.html, validators:Blanka.validators}],
["practiceb1", "VraagX", {html:{ include: "practiceb1.html" }}],
["fullexperimentmessage", "Form", {html: {include: "fullexperimentmessage.html"},continueMessage:"Click here to continue."}],
["practicefull1","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: There are two types of shapes. </p>"+ taskquestion+ Blanka.html,validators:Blanka.validators}, "VraagX", {html:{ include: "practicefull1.html" }}],
["practicefull2","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: Moons are yellow and stars are blue.</p>"+ taskquestion+ Blanka.html,validators:Blanka.validators}, "VraagX", {html:{ include: "practicefull2.html" }}],

["practice1","Form", {html: {include: "practiceb1.html" }}],
["practice2","Form", {html: {include: "practicefull1.html" }}],
["practice3","Form", {html: {include: "practicefull2.html" }}],

[["quant.ta",1],"Form", {html: {include: "quant_ta_1.html" }}],
[["quant.ta",2],"Form", {html: {include: "quant_ta_2.html" }}],
[["quant.ta",3],"Form", {html: {include: "quant_ta_3.html" }}],
[["quant.ta",4],"Form", {html: {include: "quant_ta_4.html" }}],
[["quant.ta",5],"Form", {html: {include: "quant_ta_5.html" }}],
[["quant.ta",6],"Form", {html: {include: "quant_ta_6.html" }}],
[["quant.ta",7],"Form", {html: {include: "quant_ta_7.html" }}],
[["quant.ta",8],"Form", {html: {include: "quant_ta_8.html" }}],
[["quant.ta",9],"Form", {html: {include: "quant_ta_9.html" }}],
[["quant.ta",10],"Form", {html: {include: "quant_ta_10.html" }}],
[["quant.ta",11],"Form", {html: {include: "quant_ta_11.html" }}],
[["quant.ta",12],"Form", {html: {include: "quant_ta_12.html" }}],
[["quant.ta",13],"Form", {html: {include: "quant_ta_13.html" }}],
[["quant.ta",14],"Form", {html: {include: "quant_ta_14.html" }}],
[["quant.ta",15],"Form", {html: {include: "quant_ta_15.html" }}],
[["quant.ta",16],"Form", {html: {include: "quant_ta_16.html" }}],
[["quant.ta",17],"Form", {html: {include: "quant_ta_17.html" }}],
[["quant.ta",18],"Form", {html: {include: "quant_ta_18.html" }}],
[["quant.ta",19],"Form", {html: {include: "quant_ta_19.html" }}],
[["quant.ta",20],"Form", {html: {include: "quant_ta_20.html" }}],
[["quant.ta",21],"Form", {html: {include: "quant_ta_21.html" }}],
[["quant.ta",22],"Form", {html: {include: "quant_ta_22.html" }}],
[["quant.ta",23],"Form", {html: {include: "quant_ta_23.html" }}],
[["quant.ta",24],"Form", {html: {include: "quant_ta_24.html" }}],
[["quant.ta",25],"Form", {html: {include: "quant_ta_25.html" }}],
[["quant.ta",26],"Form", {html: {include: "quant_ta_26.html" }}],
[["quant.ta",27],"Form", {html: {include: "quant_ta_27.html" }}],
[["quant.ta",28],"Form", {html: {include: "quant_ta_28.html" }}],
[["quant.ta",29],"Form", {html: {include: "quant_ta_29.html" }}],
[["quant.ta",30],"Form", {html: {include: "quant_ta_30.html" }}],


];




function blank(a, b) {
   var sentence = b ? b : a;
   var n = b ? a : null;

   var seq = [""];
   var inBlank = false;
   for (var i = 0; i < sentence.length; ++i) {
       var c = sentence.charAt(i)
       if (inBlank) {
           if (c == '_')
               (seq[seq.length-1])++;
           else {
               seq.push(c);
               inBlank = true;
           }
       }
       else {
           if (c != '_')
               seq[seq.length-1] += c
           else {
               seq.push(1);
               inBlank = true;
           }
       }
   }

   var ihtml = "";
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           var input = " <input type='text' name='blank-" + bcount + "' size='" + (n ? n : seq[i]) + "'></input> ";
           ihtml += input;
       }
       else {
           ihtml += $("<div>").text(seq[i])[0].innerHTML;
       }
   }

   var e = "<p>";
   var validators = { };
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           e += "<label class='error' for='blank-" + bcount + "'></label>";
           validators['blank-' + bcount] = function (s) { if (s && ! s.match(/^\s*$/)) return true; else return "You must fill in the blank."; }
       }
   }
   e += "</p>"

   return {
       html: "<p>" + ihtml+ "</p>" + e,
       validators: validators
   };
   //return "<p>" + ihtml+ "</p>" + e
}
