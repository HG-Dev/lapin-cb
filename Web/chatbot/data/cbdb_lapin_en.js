﻿//Automatically generated database for use by chatbot.
if (!this.cbdb) var cbdb = {};
if (!cbdb.file) cbdb.file = {};
cbdb.file.lapin_en = {};
cbdb.file.lapin_en.regexDict = {};
cbdb.file.lapin_en.aliasDict = {};
cbdb.startupMsg = "Hello! Is there anything you'd like to know about Lapin?";
if (!cbdb.defaultOptions) cbdb.defaultOptions = [];
cbdb.defaultOptions.push({text: "Address", value: "Address", icon: "location-arrow"});
cbdb.defaultOptions.push({text: "Languages", value: "Languages", icon: "exchange"});
cbdb.defaultOptions.push({text: "TEL", value: "Telephone", icon: "phone"});
cbdb.defaultOptions.push({text: "E-mail", value: "Email", icon: "envelope-open-o"});
cbdb.file.lapin_en.regexDict["time(?! is it)"] = {long: "Lapin's business hours are from 10:00 to 19:00, weekdays.", short: "10:00 to 19:00 weekdays.", func: ""};
cbdb.file.lapin_en.regexDict["employees"] = {long: "Lapin staffs more than a dozen people in office, but maintains contracts with hundreds of freelancers around the world.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["how many .*work"] = {long: "Lapin staffs more than a dozen people in office, but maintains contracts with hundreds of freelancers around the world.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["email"] = {long: "info@lapin-inc.com", short: "", func: ""};
cbdb.file.lapin_en.regexDict["telephone"] = {long: "You can reach our office at 03-6712-5951.", short: "03-6712-5951", func: ""};
cbdb.file.lapin_en.regexDict["address"] = {long: "Our office is near Omotesando Station. Barbizon104 10F, Minami-Aoyama 5-4-27, Minato-ku, Tokyo 107-0062", short: "Barbizon104 10F, Minami-Aoyama 5-4-27, Minato-ku, Tokyo 107-0062", func: ""};
cbdb.file.lapin_en.regexDict["game.*genres"] = {long: "Our accomplishments with video games allow us to localize games in many genres.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["genre"] = {long: "Our specialities as a company are works of entertainment like games, anime, movies, literature, manga, and other media, plus tourism media.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["What.*company"] = {long: "Lapin is a translation company.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["(?:(?:office.+overseas.*out)|(?:out.*office.+overseas))"] = {long: "Not at the moment.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["languages"] = {long: "Lapin provides translations for 30 or so languages around the world.", short: "Around 30 languages.", func: ""};
cbdb.file.lapin_en.regexDict["what.+unique"] = {long: "Lapin is one of few companies that enforces translations direct from Japanese, as opposed to a stand-in language like English.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["%possiblelanguage%.*to.*%possiblelanguage%"] = {long: "Sure, that's possible. Contact info@lapin-inc.com for quotes.", short: "Sure. Contact info@lapin-inc.com for quotes.", func: ""};
cbdb.file.lapin_en.regexDict["from.+#English#"] = {long: "Naturally, we provide translations from English.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["do.+%possiblelanguage%"] = {long: "That's one of our supported languages. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["(?:(?:direct.*Japanese)|(?:Japanese.*direct))"] = {long: "Contact info@lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["ese .*to .*ese "] = {long: "I'm afraid that one or both of these languages aren't registered as one of our supported languages.", short: "Sorry, one or both of those language aren't supported by Lapin.", func: ""};
cbdb.file.lapin_en.regexDict["machine"] = {long: "Our company's translations are all created by professional translators, not machines.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["native"] = {long: "Our translators are all native to their target languages.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["(?:(?:translation.*check)|(?:check.*translation))"] = {long: "We provide translation checks. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["correcti"] = {long: "We also provide translation correction. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["what.*other"] = {long: "In addition to translation, Lapin can help you with editing, corrections, DTP, and a wide variety of linguistic services. Lapin can also create and burn in subtitles for video, create voice-overs, and respond to other post-production projects.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["subtitle"] = {long: "Lapin translates and applies subtitles. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["dubbing"] = {long: "Lapin provides dubbing services. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["voice-over"] = {long: "Lapin provides voice-over services. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["(?:(?:%possiblelanguage%.*narration)|(?:narration.*%possiblelanguage%))"] = {long: "Yes, Lapin can provide narration for that language. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["narration"] = {long: "Lapin provides dubbing/narration services. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["writing"] = {long: "Lapin provides article writing support for Japanese and English. Contact lapin-inc.com for quotes.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["%possiblelanguage%(?!.+ese)"] = {long: "Lapin supports that language. Contact lapin-inc.com for quotes.", short: "Lapin supports that language.", func: ""};
cbdb.file.lapin_en.regexDict["ese(?!.+%possiblelanguage%)"] = {long: "Lapin supports certain languages. For more information, please contact info@lapin-inc.com. A representative will reply to you on a later date.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["career"] = {long: "Lapin regularly hires new freelancers and sometimes staff. For recruitment information, contact info@lapin-inc.com with your resume and/or CV.", short: "", func: ""};
cbdb.file.lapin_en.regexDict["can.*Lapin"] = {long: "Please direct unique inquiries to info@lapin-inc.com. A representative will reply to you on a later date.", short: "Please contact info@lapin-inc.com.", func: ""};
cbdb.file.lapin_en.regexDict["why "] = {long: "Why? You'll have to ask a real person about that. Why not send your question to  info@lapin.com?", short: "I'm afraid \"why\" is one of those concepts that escapes my grasp.", func: ""};
cbdb.file.lapin_en.regexDict["services"] = {long: "In addition to translation, Lapin can help you with editing, corrections, DTP, and a wide variety of linguistic services. Lapin can also create and burn in subtitles for video, create voice-overs, and respond to other post-production projects.", short: "", func: ""};
cbdb.file.lapin_en.aliasDict["English"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Korean"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Chinese"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Simplified Chinese"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Traditional Chinese"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["German"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["French"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Italian"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Spanish"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Portuguese"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Thai"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Vietnamese"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Indonesian"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Malay"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Russian"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Khmer"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Cambodian"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Turkish"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Burmese"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Dutch"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Arabian"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Hindi"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Norwegian"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Swedish"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Finnish"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Ukrainian"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["Japanese"] = "%possiblelanguage%";
cbdb.file.lapin_en.aliasDict["phone"] = "telephone";
cbdb.file.lapin_en.aliasDict["e-mail"] = "email";
cbdb.file.lapin_en.aliasDict["location"] = "address";
cbdb.file.lapin_en.aliasDict["where's"] = "address";
cbdb.file.lapin_en.aliasDict["where is"] = "address";
cbdb.file.lapin_en.aliasDict["where are you"] = "address";
cbdb.file.lapin_en.aliasDict["authoring"] = "writing";
cbdb.file.lapin_en.aliasDict["hours"] = "time";
cbdb.file.lapin_en.aliasDict["when"] = "time";
cbdb.file.lapin_en.aliasDict["difference"] = "unique";
cbdb.file.lapin_en.aliasDict["different"] = "unique";
cbdb.file.lapin_en.aliasDict["else"] = "other";
cbdb.file.lapin_en.aliasDict["voice act"] = "dubbing";
cbdb.file.lapin_en.aliasDict["voice-over"] = "dubbing";
cbdb.file.lapin_en.aliasDict["voice over"] = "dubbing";
cbdb.file.lapin_en.aliasDict["hiring"] = "career";
cbdb.file.lapin_en.aliasDict["job"] = "career";
