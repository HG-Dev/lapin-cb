function openLapinCBFrame(open) {
    var widget_parts = document.querySelectorAll("#lapin-cb div");
    if (open) {
        document.getElementById('iframe_widget').src = './chatbot/index.html';
        document.getElementById("chat-open").style.display = "block";
        for (var i = 0; i < widget_parts.length; i++)
        {
            var part = widget_parts[i];    
            part.classList.remove("chat-fadeOut");
            part.style.display = "block";
        }
    } else {
        for (var i = 0; i < widget_parts.length; i++)
        {
            var part = widget_parts[i];    
            if (part.style.display != "none" && part.getAttribute("id") != "chat-open")
            {
                part.classList.add("chat-fadeOut");
                setTimeout(function() {
                    document.getElementById("tab-close").style.display = "none";
                    document.getElementById("chat").style.display = "none"
                }, 1000);
            }
        }
    }
}
//TODO: Load settings from main CSV->JavaScript